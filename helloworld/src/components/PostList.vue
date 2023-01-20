<template>
<div class="container">
    <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content" @saludar="showAlert"/>
</div>
</template>

<script lang="ts" setup>
import PostDetail from './PostDetail.vue';

interface Post {
    title: string,
    content: string
}

let info:Array<Post> = [
    {
        title: 'Este es el post 1', 
        content: 'Texto del ejemplo 1'
    },
    {
        title: 'Este es el post 2', 
        content: 'Texto del ejemplo 2'
    },
    {
        title: 'Este es el post 3', 
        content: 'Texto del ejemplo 3'
    },
    {
        title: 'Este es el post 4', 
        content: 'Texto del ejemplo 4'
    },
    {
        title: 'Este es el post 5', 
        content: 'Texto del ejemplo 5'
    }
]

function showAlert(msg: string){
    alert(msg);    
}

//Javascript puro
/* 
let info = [
    {
        title: 'Este es el post 1', 
        content: 'Texto del ejemplo 1'
    },
    {
        title: 'Este es el post 2', 
        content: 'Texto del ejemplo 2'
    },
    {
        title: 'Este es el post 3', 
        content: 'Texto del ejemplo 3'
    },
    {
        title: 'Este es el post 4', 
        content: 'Texto del ejemplo 4'
    },
    {
        title: 'Este es el post 5', 
        content: 'Texto del ejemplo 5'
    }
]
 */
</script>

<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
    }
</style>