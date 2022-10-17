<script setup lang="ts">
import usePokemon from '@/compotitions/usePokemon';

const { pokemonList, getPokemonList } = usePokemon();

getPokemonList('https://pokeapi.co/api/v2/pokemon');

setTimeout(() => {
  console.log(pokemonList);
}, 1000);
</script>
<template>
  <div v-if="pokemonList.length">{{pokemonList[0].name}}</div>
</template>
