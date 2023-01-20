<template>
    <div>
        <input type="text" v-model="mensaje" />
        <h3>{{mensaje}}</h3>
        <h3>{{reverse}}</h3>
    </div>
</template>

<!--Option Api-->
<!--
    <script lang="ts">
    
        import { defineComponent } from 'vue';
        
        export default defineComponent({
            name: 'ComputedExample',
            data(){
                return {
                    mensaje: ''
                }
            },
            computed: {
                reverse():string{
                    return this.mensaje.split('').reverse().join('')
                }
            }
        });
    
    </script>
-->

<!--Composition Api-->
<!-- 
    <script lang="ts">
    
        import { defineComponent, ref, Ref, computed } from 'vue';
    
        export default defineComponent({
            name: 'ComputedExample',
            setup() {
    
                let mensaje:Ref<string> = ref('');
    
                const reverse = computed(() => mensaje.value.split('').reverse().join(''));
    
                return {
                    mensaje,
                    reverse
                }
    
            }
        })
    
    </script>
-->

<!--Composition Api con setup-->

<script lang="ts" setup>
    
    import { ref, Ref, computed } from 'vue';

    let mensaje:Ref<string> = ref('');

    const reverse = computed(() => mensaje.value.split('').reverse().join(''));


</script>


<style scoped>

</style>