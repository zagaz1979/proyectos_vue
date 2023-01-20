<template>
    <h1>Listado de posts </h1>
    <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'PostDetail', params: {id: post.id}}">
                {{ post.title }}
            </router-link>
            
        </li>
    </ul>
</template>

<!-- Composition Api sin setup -->
<!--
    <script lang="ts">
        import PostService from '@/services/PostService';
        import { defineComponent, onMounted } from 'vue';
    
        export default defineComponent({
            name: 'PostList',
            setup() {
                const service = new PostService();
                const posts = service.getPosts();
    
                onMounted( async () => {
                    await service.fetchAll();
                })
    
                return {
                    posts
                }
    
            }
        })
    </script>
-->

<!-- Option Api -->
<!--
    <script lang="ts">
        import PostService from '@/services/PostService';
        import { defineComponent, onMounted } from 'vue';
    
        export default defineComponent({
            name: 'PostList',
            data() {
                const service = new PostService();
                const posts = service.getPosts();
    
                return {
                    posts,
                    service
                }
    
            },
    
            async mounted() {
                await this.service.fetchAll();
            } 
                
            
    
        })
    </script>
-->

<!-- Composition Api con setup -->

<script lang="ts" setup>
    import PostService from '@/services/PostService';
    import { defineComponent, onMounted } from 'vue';

    const service = new PostService();
    const posts = service.getPosts();

    onMounted( async () => {
        await service.fetchAll();
    })

</script>


<style scoped lang="scss">
    
    .post-list {
        width: 90%;
        height: 75px;
        padding: 20px;
        list-style-type: none;
        margin: 0 auto;


        li{
            padding: 10px;
            width: 100%;
            border: 1px solid #ccc; 
            /*color: $primaryColor;*/
            cursor: pointer;
            
            
            a{
                text-decoration: none;
                color: $textColor;
            }

            a:hover{
                color: $primaryColor;
            }

        }


    }

</style>