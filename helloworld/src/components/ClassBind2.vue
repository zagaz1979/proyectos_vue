<template>

    <p v-bind:style="{
        backgroundColor: 'red',
        color: c
    }">El mensaje se ha enviado satisfactoriamente</p>

    <button v-on:click="handleClick()">Cambiar Color</button>

</template>

<script lang="ts">

    /*
    //Forma composition Api con setup
    import {Ref, ref} from 'vue';
    let c = ref("#fff");

    const handleClick = () => {
        c.value = "#00ff00";
    } 
    */

   //Composition Api sin el setup
   import { defineComponent, ref } from 'vue';
   export default defineComponent({
    name: 'ClassBind2',
    setup(){
        let c = ref("#fff");

        const handleClick = () => {
            c.value = "#00ff00";
        }

        return {
            c,
            handleClick
        }
    }
   })

   /*
   //Option Api
   import { defineComponent } from 'vue';
   export default defineComponent({
    name: 'ClassBind2',
    data(){
        return {
            c : "#fff"
        }
    },
    methods:{
        handleClick(){
            this.c = "#00ff00";
        }
    }
   })
   */

</script>

<style scoped>

</style>