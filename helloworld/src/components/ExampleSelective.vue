<template>

    <!--
        <h1 v-if="age < 18">Eres menor de edad</h1>
        <h1 v-else>Eres mayor de edad</h1>
    -->

    <h1 v-show="age < 18">Eres menor de edad</h1>
    <h1 v-show="age > 18">Eres mayor de edad</h1>

</template>


<script lang="ts" setup>
    let age = 10;
</script>


<!-- Esto seria con el defineComponent -->
<!--
<script lang="ts">
    import { defineComponent } from "vue";
    export default defineComponent({
        name: 'ExampleSelective',
        setup(){
            let age = 10
            return {
                age
            }
        }
    })
</script>
-->


<style scoped>
</style>