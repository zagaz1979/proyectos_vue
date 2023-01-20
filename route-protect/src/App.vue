<template>
  <RouterView></RouterView>
</template>


<!--

  <template>
    <input type="text" v-model="note">
    <button @click="sendToServer">Enviar nota al servidor</button>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue'
  
    let note = ref('') 
  
    const sendToServer = async () => {
      const rawResponse = await fetch('http://xxxxxxxxxxx', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer YYYYYYYYYYYYYYYYYYY'
          //'Authorization': 'Bearer ' + store.jwt
        },
        body: JSON.stringify({
          note: note.value
        })
  
      })
  
      const response = await rawResponse.json()
  
    }
  
  </script>
-->