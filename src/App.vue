<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HomeView from './views/HomeView.vue'
</script>

<template>
  <div>
    <HomeView></HomeView>
  </div>
  <RouterView />
  

</template>

<style scoped>
.color {
    background: #2a272d;
}
</style>
