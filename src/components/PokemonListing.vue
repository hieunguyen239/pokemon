<template>
  <div class="pokemon-listing cards p-2">
    <PokemonCard
      v-for="pokemon in pokemonList"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
  </div>
</template>
<script setup lang="ts">
import usePokemon from '@/compotitions/usePokemon';
import PokemonCard from '@/components/PokemonCard.vue';

const { pokemonList } = usePokemon();
</script>
<style>
.pokemon-listing {
  background: #29292c;
}

.cards {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
