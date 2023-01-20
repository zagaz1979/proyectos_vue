<template> 
  <h3>Counter</h3>
  <h3>{{ counter }} x2 = {{ times2 }}</h3>
  <button @click="increment">Incrementar</button>
</template>


<!-- Options Api 1 formula -->
<!--
  <script lang="ts">
  
    import { defineComponent } from 'vue';
   
    export default defineComponent({
      name: "HelloWorld",
      computed: {
       
        //1 formula
        counter(){
          // Leer el counter desde el estado global
          return this.$store.state.counter
   
        },
        
        //1 formula
        times2(){
          // Leer el getter times2 desde el store
          return this.$store.getters.times2
        }
        
   
      },
      methods: {
   
        
        //1 formula
        increment(){
          // Usar la mutacion setConter desde el store
          this.$store.commit('setCounter', this.counter + 1)
        }
        
   
      }
   
    })
  
  </script>
-->


<!-- Options Api 2 formula -->
<!--
  <script lang="ts">
  
    import { defineComponent } from 'vue';
    import { mapMutations, mapState, mapGetters } from 'vuex';
   
    export default defineComponent({
      name: "HelloWorld",
      computed: {
   
        ...mapState(['counter']), 
        ...mapGetters(['times2'])
   
      },
      methods: {
   
        ...mapMutations(['setCounter']),
   
        increment(){
          this.setCounter(this.counter + 1)
        }
   
      }
   
    })
  
  
  </script>
-->




<!-- Composition Api sin setup -->
<!--
  <script lang="ts">
  
    import { defineComponent, computed } from 'vue';
    import { useStore } from 'vuex';
    
    export default defineComponent({
      
      name: "HelloWorld",
      setup(){
        const store = useStore()
        
        const counter = computed( () => store.state.counter )
  
        const times2 = computed( () => store.getters.times2 )
  
        const increment = () => store.commit('setCounter', counter.value + 1)
  
        return { increment, counter, times2 }
  
      }
  
    })
  
  </script>
-->

<!-- Composition Api con setup -->
<script lang="ts" setup>

  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore()
  
  const counter = computed( () => store.state.counter )

  const times2 = computed( () => store.getters.times2 )

  const increment = () => store.commit('setCounter', counter.value + 1)

</script>