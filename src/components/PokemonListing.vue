<template>
  <div class="pokemon-listing h-screen">
    <div class="p-4">
      <img
        class="pokemon-title"
        src="../../public/International_Pokémon_logo.svg.png"
        alt=""
      />
    </div>

    <div class="flex text-center justify-center text-white">
      <div
        @click="favoriteFilter"
        class="mr-5"
        :class="{ 'pointer-events-none opacity-50': !getFavFromLS }"
      >
        Favorite ({{ getFavFromLS }})
      </div>
      <div @click="reset">View All</div>
    </div>

    <div class="cards p-2 grid grid-cols-12 w-full">
      <div v-for="pokemon in pokemonList" :key="pokemon.id" :pokemon="pokemon" class="col-span-6">
        <router-link :to="`/detail/${pokemon.id}`">
          <PokemonCard :pokemon="pokemon" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import usePokemon from '@/compotitions/usePokemon';
import PokemonCard from '@/components/PokemonCard.vue';
import { getLocalStorage } from '@/helpers/storage';
import { computed } from 'vue';

const { pokemonList, getFavoriteList, getPokemonList } = usePokemon();

if (!pokemonList.length) {
  getPokemonList('https://pokeapi.co/api/v2/pokemon');
}

function favoriteFilter() {
  getFavoriteList();
}

const getFavFromLS = computed(() => {
  const favoList = JSON.parse(getLocalStorage('pokeFaverites') || '[]');
  return favoList.length;
});

function reset() {
  pokemonList.splice(0, pokemonList.length);
  getPokemonList('https://pokeapi.co/api/v2/pokemon');
}
</script>
<style>
.pokemon-listing {
  background: #29292c;
}
.pokemon-title {
}
</style>
