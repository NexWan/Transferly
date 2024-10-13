<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const body = document.querySelector('body')
body?.classList.add('bg-main')
</script>

<template>
  <header class=" max-w-2xl flex flex-row top-0 mx-auto justify-center text-white">  
    <nav class="flex flex-row">
      <RouterLink to="/" class="p-4">Home</RouterLink>
      <RouterLink to="/about" class="p-4">About</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>  
</style>
