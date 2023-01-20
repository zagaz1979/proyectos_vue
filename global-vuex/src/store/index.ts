/*
import { createStore } from 'vuex'

export default createStore({
  state: {
    jwt: '',
    error: ''
  },
  
  actions: {

    async login(state, email: string, password: string): Promise<boolean> {
      try {
          const res = await fetch('https://hfp89ilv.directus.app/auth/login', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  email: email,
                  password: password
              })
          })

          const response = await res.json()

          if ('errors' in response){
              state.error = 'Login failed'
              return false
          }

          state.jwt = response.data.access_token
          return true
          
      } catch (error) {
          state.error = 'Login failed'
          return false
      }
    }

    
  },
  
  
})
*/


import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1
  },
  getters: {
    times2(state){
      return state.counter * 2;  
    }
  },
  mutations: {
    setCounter(state, value){
      state.counter = value;
    }
  },
  
  //actions: {
  //  async setCounter(state, value){
  //    await state.coun
  //  }
  //},
  
  
  
  //modules: {
  //  // Subdividir nuestro store
  //}
  
})




/*

import { Ref, ref } from 'vue'

class AuthService {

    private jwt: Ref<string>
    private error: Ref<string>

    constructor() {
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt(): Ref<string> {
        return this.jwt
    }

    getError(): Ref<string>{
        return this.error
    }

    async login(email: string, password: string): Promise<boolean> {
        try {
            const res = await fetch('https://hfp89ilv.directus.app/auth/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const response = await res.json()

            if ('errors' in response){
                this.error.value = 'Login failed'
                return false
            }

            this.jwt.value = response.data.access_token
            return true
            
        } catch (error) {
            this.error.value = 'Login failed'
            return false
        }
    }

}

export default AuthService

*/