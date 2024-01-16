import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app"
import { Auth, getAuth } from "firebase/auth"

const firebaseConfig={
    apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}

let app;
let auth: Auth;

try{
   app = initializeApp(firebaseConfig);
   auth = getAuth(app);

   

    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
        const isAuthenticated = auth.currentUser !== null;

        if (requiresAuth && !isAuthenticated) {
            next('/login'); // Redirect to login page for unauthenticated users
          } else {
            next();
          }
    });

} catch(error){
    console.error('Firebase initialization error:', error);
}


createApp(App).use(store).use(router).mount('#app')

export { auth }
