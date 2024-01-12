<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import VedioList from '@/components/VedioList.vue'; // @ is an alias to /src

@Options({
  components: {
    VedioList,
  },
})
export default class HomeView extends Vue {}
</script>
