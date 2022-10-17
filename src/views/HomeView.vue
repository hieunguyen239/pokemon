<script setup lang="ts">
import PokemonSearch from "@/components/PokemonSearch.vue";
import PokemonListing from "@/components/PokemonListing.vue";
</script>

<template>
  <div class="home-view p-5">
    <PokemonSearch />
    <PokemonListing />
  </div>
</template>
<style>
.home-view {
  background: #29292c;
}
.cards {
  display: grid;
  grid-template-columns: auto auto;
}
</style>
