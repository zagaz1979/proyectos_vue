<template> 
    
    <div class="container">
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary mt-2" @click.prevent="authUser">Enviar</button>
        
        </form>
    </div>

</template>

<script lang="ts" setup>

    import {Ref, ref} from 'vue'
    import AuthService from '../services/AuthService'

    let email = ref('')
    let password = ref('')

    const authUser = async () => {
        const auth = new AuthService()
        const success = await auth.login(email.value, password.value)

        if (success) {
            //$cookies.set('auth', success.access_token);
            alert('Exito')
        }else{
            alert('Login incorrecto')
        }

    }


</script>