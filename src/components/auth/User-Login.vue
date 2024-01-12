<!-- Login.vue -->
<template>
    <div>
        <!-- Other form elements -->
       <input v-model="email" type="email" placeholder="Email">
       <input v-model="password" type="password" placeholder="password">
      <!-- Your login form here -->
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script lang="ts">
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { ref } from 'vue';
  import { auth } from '@/main';
  import { useRouter } from 'vue-router';  // Import useRouter
  
  export default {
    data() {
    return {
      email: '',
      password: '',
      // Other data properties
    };
  },
    methods: {
      async login() {
        try {
          await signInWithEmailAndPassword(auth, this.email, this.password);
          // Redirect or perform additional actions after successful login

          const router = useRouter();
        router.push({ name: 'home' });  // Assuming 'home' is the name of the VideoList route
        } catch (error) {
          console.error('Login error:', error.message);
        }
      },
    },
  };
  </script>
  