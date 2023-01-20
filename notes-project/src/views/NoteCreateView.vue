<template> 

    <form>
    
        <div class="mb-3">
            <label for="note" class="form-label">My note</label>
            <input 
                type="text" 
                class="form-control" 
                id="note"
                v-model="note"
            >
        </div>

        <button 
            type="submit" 
            class="btn btn-primary"
            @click.prevent="sendNote"
        >
            Submit
        </button>

        <p style="color:red;"> {{ feedback }} </p>

    </form>

</template>

<script lang="ts" setup>
    import {ref} from 'vue';
    import useAuth from '@/store/auth';
    import router from '@/router';

    const feedback = ref('')
    const store = useAuth()
    const note = ref('')

    const sendNote = async () => {
        const response = await store.createNote(note.value)
        if (response == false){
            feedback.value = "Error al guardar la nota"
        }else{
            router.push({name: 'list'})
        }
    }
</script>