<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import usePokemon from '@/compotitions/usePokemon';

const { getPokemonList } = usePokemon();

getPokemonList('https://pokeapi.co/api/v2/pokemon');
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
