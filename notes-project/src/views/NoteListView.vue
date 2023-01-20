<template>
    
    <router-link :to="{name: 'create'}">Create new note</router-link>
    <button @click.prevent="logout">Logout</button>

    <table class="table" v-if="notes">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Note</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="note in notes" :key="note.id">
                <td scope="row"> {{ note.id }} </td>
                <td> {{ note.content }} </td>
            </tr>
        </tbody>
    </table>

    <p v-else>No hay datos</p>
    
</template>

<script lang="ts" setup>

    import { ref, Ref, onMounted } from 'vue';
    import useAuth from '@/store/auth';
    import INote from '@/interfaces/INote'
import router from '@/router';

    const store = useAuth()

    const notes:Ref<Array<INote>> = ref([])
    
    onMounted(async () => {
        notes.value = await store.getNotes()
    })

    const logout =  () => {
        store.logout()
        router.push({name: 'login'})
    }
        

</script>