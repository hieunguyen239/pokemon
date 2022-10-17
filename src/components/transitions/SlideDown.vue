<template>
  <Transition>
    <article v-if="show">
      <slot></slot>
    </article>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const show = ref(false);

onMounted(() => {
  show.value = true;
});
</script>

<style lang="scss" scoped>

</style>