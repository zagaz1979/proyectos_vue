<template>
<div>Hola mundo</div>
</template>


<script lang="ts" setup>

//Composition Api
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
    console.log("mounted");
});

onUpdated(() => {
    console.log("updated");
});



</script>

<!--
<script lang="ts">



//Option Api
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CycleOption',

    
    //data(){
    //},

    //methods: {
    //},
    

    created(){
        console.log("created");
    },

    mounted(){
        console.log("mounted");
    },

    updated(){
        console.log("updated");
    },

    unmounted(){
        console.log("unmounted");
    }

}); 



</script>
-->


<style scoped>
</style>