<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
const body = document.querySelector('body')
body?.classList.add('bg-main')
</script>

<template>
  <p class="absolute top-6 left-10 font-bold">Transferly</p>
  <header class="max-w-2xl flex flex-row top-0 mx-auto justify-center text-white">
    <nav class="flex flex-row border-b rounded-lg mt-3">
      <RouterLink to="/" class="p-4 hover:scale-105 font-bold transition-all " activeClass="scale-110"> <i
          class='pi pi-home mx-2'></i>Home</RouterLink>
      <RouterLink to="/dashboard" class="p-4 hover:scale-105 font-bold transition-all"><i
          class='pi pi-gauge mx-2'></i>Dashboard</RouterLink>
      <RouterLink to="/profile" class="p-4 hover:scale-105 font-bold transition-all"><i
          class='pi pi-user mx-2'></i>Profile</RouterLink>
    </nav>
  </header>
  <router-view v-slot="{ Component }">
    <transition name="page-slide" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<style scoped>

.page-slide-enter-active,
.page-slide-leave-active {
  transition: 400ms ease all;
}

.page-slide-enter-from, 
.page-slide-leave-to {
  opacity: 0;
  transform: translateY(60px);
}


</style>
