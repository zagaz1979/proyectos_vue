<template>

    <h3>{{counter}}</h3>
    <button @click="addCounter">Incrementar</button>

</template>

<script lang="ts" setup>

    import { Ref, ref } from "vue";

    let counter: Ref = ref(0)
    const addCounter = (): void => {
        counter.value++
    }



/*
    import { defineComponent, Ref, ref } from "vue";
    export default defineComponent({
        name: 'CounterComposition',
        components:{},
        setup(){
            let counter: Ref = ref(0)
            const addCounter = (): void => {
                counter.value++
            }

            return{
                counter,
                addCounter
            }
        }
    })
    */
</script>
