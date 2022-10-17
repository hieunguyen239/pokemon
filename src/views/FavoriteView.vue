<template>
  <div>
    <div class="p-4">
      <router-link :to="`/listing/`">
        &lt; Back to listing
      </router-link>
      <div class="grid grid-cols-12 w-full">
      <div v-for="pokemon in pokemonList" :key="pokemon.id" :pokemon="pokemon" class="col-span-6">
        <router-link :to="`/detail/${pokemon.id}`">
          <PokemonCard :pokemon="pokemon" />
        </router-link>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PokemonCard from "@/components/PokemonCard.vue";

const pokemonList = ref([{
  id: 1,
},
{
  id: 2,
}])
</script>

<style scoped>

</style>