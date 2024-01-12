<!-- GoogleSignIn.vue -->
<template>
    <div>
      <!-- Your Google Sign-In button here -->
      <button @click="googleSignIn">Google Sign-In</button>
    </div>
  </template>
  
  <script lang="ts">
  import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
  import { ref } from 'vue';
  import { auth } from '@/main';
  
  export default {
    methods: {
      async googleSignIn() {
        try {
          const provider = new GoogleAuthProvider();
          await signInWithPopup(auth, provider);
          // Redirect or perform additional actions after successful Google Sign-In
        } catch (error) {
          console.error('Google Sign-In error:', error.message);
        }
      },
    },
  };
  </script>
  