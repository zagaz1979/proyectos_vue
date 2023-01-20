import { defineStore } from "pinia";

const useAuth = defineStore('auth', {

    state: () => {
        return {
            token: null,
            baseURL: 'http://127.0.0.1:8000/api'
        }
    },

    actions: {
        async register(name: string, email: string, password: string){
            const url = `${this.baseURL}/auth/register`
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify({
                    'name': name,
                    'email': email,
                    'password': password
                })
            })

            const response = await rawResponse.json()

            if (response.status == false){
                return false
            }else{
                this.token = response.token
                return true
            }

        },
        async login(email: string, password: string){
            const url = `${this.baseURL}/auth/login`
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json'
                },
                body: JSON.stringify({
                    'email': email,
                    'password': password
                })
            })

            const response = await rawResponse.json()
            
            if ( response.status == false ){
                this.token = null
                return false
            }else{
                this.token = response.token
                return true
            } 

        },
        async getNotes(){
            
            const url = `${this.baseURL}/note`
            const rawResponse = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json',
                    'Authorization': `Bearer ${this.token}`
                }
            })

            const response = rawResponse.json()

            return response
            
        },
        async createNote(content: string){
            const url = `${this.baseURL}/note`
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json',
                    'Accept': 'Application/json',
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify({
                    'content': content
                })
            })

            const response = await rawResponse.json()

            if ( response.status == false ){
                return false
            }else{
                return true
            } 

        },

        logout(){
            this.token = null
        }
        
    }

})

export default useAuth