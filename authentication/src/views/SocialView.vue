<template>
    <h1>Social login</h1>

    <button @click="loginGoogle">Login con Google</button>

    <button @click="loginFacebook">Login con Facebook</button>

    <button @click="loginTwitter">Login con Twitter</button>

    <button @click="loginGithub">Login con Github</button>
</template>

<script lang="ts" setup>

    import { GithubAuthProvider, TwitterAuthProvider, FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

    const googleProvider = new GoogleAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const twitterProvider = new TwitterAuthProvider()
    const githunProvider = new GithubAuthProvider()
    const auth = getAuth()

    const loginGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then( (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Login success")                
        })
        .catch( (error) => {
            alert("Login fail")               
        })
    }

    const loginFacebook = () => {
        signInWithPopup(auth, twitterProvider)
        .then( (result) => {
            const credential = FacebookAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Login success")                
        })
        .catch( (error) => {
            alert("Login fail")               
        })
        
    }

    const loginTwitter = () => {
        signInWithPopup(auth, twitterProvider)
        .then( (result) => {
            const credential = TwitterAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Login success")                
        })
        .catch( (error) => {
            alert("Login fail")               
        })
        
    }

    const loginGithub = () => {
        signInWithPopup(auth, githunProvider)
        .then( (result) => {
            const credential = GithubAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            alert("Login success")                
        })
        .catch( (error) => {
            alert("Login fail")               
        })
        
    }

</script>