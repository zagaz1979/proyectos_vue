<template>
    <form> 
        <input type="text" v-model="inputText" />
        
        <input type="checkbox" v-model="agree" /> Acepto los terminos y condiciones

        <select v-model="country">
            <option value="Spain">Spain</option>
            <option value="UK">UK</option>
            <option value="France">France</option>
        </select>

    </form>
    <h3>{{inputText}}</h3>
</template>

<!--Composition Api-->

<script lang="ts" setup>
    import {Ref, ref} from 'vue';

    let inputText: Ref<string> = ref("");
    let agree: Ref<boolean> = ref(true);
    let country: Ref<string> = ref('Spain');

</script>


<!--Composition Api standart-->
<!--   
<script lang="ts">

    import {ref, defineComponent} from 'vue';

    export default defineComponent({
        setup(){
            let inputText = ref("");
            return {
                inputText
            }
        }
    });

</script>
-->

<!--Options Api-->
<!--
<script lang="ts">

    import {defineComponent} from 'vue';

    export default defineComponent({
        data(){
            return {
                inputText: '',
                agree: true
            }
        }
    });

</script>
-->

<style scoped>
</style>