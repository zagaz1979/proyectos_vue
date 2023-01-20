<template>
<div class="post">
    <h3>{{props.title}}</h3>
    <p>{{props.content}}</p>
    <input type="text" v-model="mensaje">
    <button @click="handleClick">Saludar</button>
</div>
</template>

<!--
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
export default defineComponent({
    name: 'PostDetail',

    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: false,
            default: 'Este post no tiene contenido'
        }
    },

    emits: ["saludar"],

    setup(props, {emit}){

        const handleClick = () => {
            emit("saludar", `${mensaje.value}`);
        };

        let mensaje:Ref<string> = ref(''); 

        return {
            props,
            handleClick,
            mensaje
        }
    }
});
</script>
-->


<script lang="ts" setup>

    import { defineProps, defineEmits, Ref, ref } from 'vue';

    const props = defineProps({
        title: String, 
        content: String
    });

    const emit = defineEmits(['saludar']);


    const handleClick = () => {
        emit("saludar", `${mensaje.value}`);
    };

    let mensaje:Ref<string> = ref(''); 



</script>


<style scoped>
    .post{
        width: 300px;
        background-color: antiquewhite;
        border-radius: 10px;
        height: 200px;
        margin: 10px;
        padding: 10px;
    }
</style>