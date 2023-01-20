<template>

    <form>

        <div class="mb-3">
            <label for="name" class="form-label">User name</label>
            <input 
                type="text" 
                class="form-control" 
                id="name" 
                aria-describedby="nameHelp"
                v-model="name"
            >
        </div>

        <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input 
                type="email" 
                class="form-control" 
                id="email" 
                aria-describedby="emailHelp"
                v-model="email"
            >
        </div>

        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input 
                type="password" 
                class="form-control" 
                id="password"
                v-model="password"
            >
        </div>

        <button 
            type="submit" 
            class="btn btn-primary"
            @click.prevent="createUser"
        >
            Submit
        </button>

        <p style="color: red;"> {{ feedback }} </p>

    </form>

    <router-link :to="{name: 'login'}">Login</router-link>

</template>

<script lang="ts" setup>

    import { ref } from 'vue'
    import useAuth from '@/store/auth';
    import router from '@/router';

    const store = useAuth()
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const feedback = ref('')

    const createUser = async () => {
        feedback.value = 'Sending...'
        const response = await store.register(name.value, email.value, password.value)
        if (response == false){
            feedback.value = 'Error en el registro'
        }else{
            router.push({name: 'list'})
        }
    }

</script>