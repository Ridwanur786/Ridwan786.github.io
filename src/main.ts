import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app"
import { Auth, getAuth } from "firebase/auth"

const firebaseConfig={
    apiKey: "AIzaSyDuReD_nlnoAjcXDgO26O9_5d3MfeiQdVA",
  authDomain: "video-listing-app.firebaseapp.com",
  projectId: "video-listing-app",
  storageBucket: "video-listing-app.appspot.com",
  messagingSenderId: "429668129004",
  appId: "1:429668129004:web:f6e1ee1d8a81997f4badc9"
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
