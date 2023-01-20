import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' 

//Importación de firebase
import { initializeApp } from "firebase/app";

import VueCookies from 'vue-cookies';

import VueSession from 'vue-session';

//---Importar librria de aws---
//import { Amplify } from 'aws-amplify'
//import awsExports from './aws-exports'
//-----------------------------

//Configuración de amplify
//Amplify.configure(awsExports)

//Configuracion de firebase
const firebaseConfig = {
    apiKey: "AIzaSyCGMvy1Wc9jhgbyJ1o39-ysGjVrteWXuY4",
    authDomain: "curso-vue-c12ef.firebaseapp.com",
    projectId: "curso-vue-c12ef",
    storageBucket: "curso-vue-c12ef.appspot.com",
    messagingSenderId: "824746109803",
    appId: "1:824746109803:web:90ed16670beccc7808fa2e",
    measurementId: "G-D4QB6E0YLH"
  };

// Initialize Firebase
initializeApp(firebaseConfig);  

//Configuración de azure
// import Emitter from 'tiny-emitter'

/*
const app = createApp(App) 
app.use(router).mount('#app')

app.config.globalProperties.$msalInstance = {}
app.config.globalProperties.$emitter = new Emitter()
*/



const app = createApp(App);

app.use(router).use(VueCookies, {expires: '1d'}).use(VueSession).mount('#app');


