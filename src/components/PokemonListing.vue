<template>
  <div class="pokemon-listing">
    <div class="p-4">
      <img
        class="pokemon-title"
        src="../../public/International_Pokémon_logo.svg.png"
        alt=""
      />
    </div>
  <div class="cards">
    <div v-for="pokemon in pokemonList" :key="pokemon.id" :pokemon="pokemon">
      <router-link :to="`/detail/${pokemon.id}`">
        <PokemonCard :pokemon="pokemon" />
      </router-link>
    </div>
  </div>
  </div>
  
</template>
<script setup lang="ts">
import usePokemon from "@/compotitions/usePokemon";
import PokemonCard from "@/components/PokemonCard.vue";

const { pokemonList, getPokemonList } = usePokemon();

if (!pokemonList.length) {
  getPokemonList('https://pokeapi.co/api/v2/pokemon');
}
</script>
<style>
.pokemon-listing {
  background: #29292c;
}

.cards {
  display: grid;
  grid-template-columns: auto auto;
}
.pokemon-title {
}
</style>
