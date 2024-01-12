<template>
  <nav>
    <ul>
      <li> <router-link to="/home">Home</router-link> </li>
      <li>  <router-link to="/login">Log In</router-link> </li>
      <li><router-link to="/">Video List</router-link> </li>
      <li><router-link to="/signup">Sign up</router-link> </li>
      <li><router-link to="/googlesignin">Google Sign In</router-link> </li>
    </ul>
    
   
  
    
    <!-- <router-link to="/watch/:id">Watch</router-link> -->
  </nav>
  <div id="app">
    <router-view></router-view>
  </div>
  
</template>

<script lang="ts">
import { onAuthStateChanged } from "firebase/auth";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "@/main";



export default {
  name: 'App',
  setup(){
    const router = useRouter();
    const isAuthenticated = ref(false);
    onMounted(() => {
    onAuthStateChanged(auth ,(user) => {
      isAuthenticated.value = user !== null

      if (!user && router.currentRoute.value.meta.requiresAuth) {
        router.push('/login');
      }
   
    });
    });
    return { isAuthenticated };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  ul{
    list-style:none;
    text-decoration: none;
    float:left;

    & li{
      display: inline-block;
      padding: 5px;
      
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
