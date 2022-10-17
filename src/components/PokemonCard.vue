<template>
  <div class="rounded-2xl border-solid shadow-xl pokemon-card bg-gray-50 m-2">
    <div class="image-card">
      <img class="" :src="pokemon.image" alt="" />
    </div>
    <div>
      <p class="text-xl text-black text-center m-2">{{ pokemon.name }}</p>
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
.image-card {
  display: flex;
  justify-content: center;
}
img {
  object-fit: cover;
  width: 66%;
}
</style>
