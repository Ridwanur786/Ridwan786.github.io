
import { defineComponent } from 'vue';

import { defineComponent } from 'vue';

import { useRouter } from 'vue-router';
<!-- Signup.vue -->
<template>
    <div>
        
        <input v-model="email" type="email" placeholder="Email">
       <input v-model="password" type="password" placeholder="password">
      <!-- Your signup form here -->
      <button @click="signup">Signup</button>
    </div>
  </template>
  
  <script>
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { ref, defineComponent } from 'vue';
  import { auth } from '@/main';
  import { useRouter } from "vue-router";
  
  export default defineComponent ({
    data() {
    return {
      email: '',
      password: '',
      // Other data properties
    };
  },
    methods: {
      async signup() {
        try {
          await createUserWithEmailAndPassword(auth, this.email, this.password);
          // Redirect or perform additional actions after successful signup

           // Successful signup logic

        // After successful signup, navigate to the login page
        const router = this.$router;
        router.push({ name: 'login' });  // Assuming 'login' is the name of the login route
        } catch (error) {
          console.error('Signup error:', error.message);
        }
      },
    },
  });
  </script>
  