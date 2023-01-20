<template>

    <p v-bind:class="{
        'danger': hasError
    }">El mensaje se ha enviado satisfactoriamente</p>

</template>

<script lang="ts">

    //Composition actual con setup
    //let hasError = true;

    /*
    //Compisition Api estandar
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'ClassBind',
        setup(){
            let hasError = true;
            return {
                hasError
            }
        }
    })
    */

   //Option Api
   import { defineComponent } from 'vue';
   export default defineComponent({
    name: 'ClassBind',
    data(){
        return {
            hasError: false
        }

    } 
   })

</script>

<style scoped>

    .danger{
        color: red;
    }

</style>