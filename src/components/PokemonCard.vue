<template>
  <div class="rounded-2xl border-solid shadow-xl pokemon-card bg-gray-50 m-3">
    <div class="">
      <img class="" :src="pokemon.image" alt="" />
    </div>
    <div>
      <p class="text-2xl text-black text-center m-3">{{ pokemon.name }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IPokemonData } from '@/model/IPokemonData';

import { defineProps } from 'vue';

interface IProps {
  pokemon: IPokemonData;
}
const props = defineProps<IProps>();
const pokemon = props.pokemon;

</script>
<style>
.pokemon-card {
  /* width: 50%; */
}
img {
  width: 100%;
}
</style>
