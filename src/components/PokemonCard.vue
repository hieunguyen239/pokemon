<template>
  <div class="rounded-2xl border-solid shadow-xl pokemon-card bg-gray-50 m-2">
    <div class="flex justify-center">
      <img class="pokemon-image" :src="pokemon.image" alt="" />
    </div>
    <div>
      <p class="text-sm text-black text-center m-2 uppercase">{{ pokemon.name }}</p>
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
.pokemon-image {
  object-fit: cover;
  /* height: 140px!important; */
  width: 66%;
}
.pokemon-card {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>
