<template>
    <div>
        <label v-custon-font.xxl.blue>Subtotal</label>
        <input type="number" v-model="subtotal">
        <h3 v-custon-font.red>Total impuestos a pagar {{totalIva}} ({{iva}}%)</h3>
    </div>
</template>


<!--Composition Api con setup-->


<script lang="ts" setup>
    
    import { computed, ComputedRef, ref, Ref } from 'vue';

    const iva = 21;
    let subtotal:Ref<number> = ref(0);
    const totalIva:ComputedRef<number> = computed(() => (iva * subtotal.value) / 100 );    
    
</script>

    
<style scoped>

</style>