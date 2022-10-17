<template>
  <Transition>
    <div class="detail" v-if="show">
      <figure>
        <img src="@/assets/pokemon00.webp" alt="" srcset="" class="rounded-full">

        <figcaption>
          <h1 class="font-bold text-xl text-center my-2">Bulbasaur</h1>
        </figcaption>
      </figure>

      <section class="px-4 py-2 flex justify-center text-center">
        <div
          class="py-2 px-4 text-white rounded-full shadow-sm mx-3" v-for="element in elements"
          :key="element"
          :style="{ backgroundColor: mapElementColor(element) }"
        >
          {{ element }}
        </div>
      </section>
      <section class="px-4 py-2 flex justify-center text-center">
      <div class="weight">
          <div class="py-2 px-4">6.9 KG</div>
          <div>Weight</div>
      </div>
      <div class="height">
          <div class="py-2 px-4">0.7 M</div>
          <div>Height</div>
      </div>
      </section>
      <section class="px-4">
        <h1 class="font-bold text-xl text-center my-2">Base Stats</h1>
        <div v-for="(stat, key) in baseStats" class="mt-3">
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-blue-700 dark:text-white">{{ key }}</span>
            <span class="text-sm font-medium text-blue-700 dark:text-white">{{ stat.current }} / {{ stat.max }}</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div class="h-2.5 rounded-full" :style="{ width: `${stat.percent}%`, backgroundColor: stat.color }"></div>
          </div>
        </div>
      </section>
    </div>
  </Transition>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';

const show = ref(false);

const elementColors = computed(() => ({
    grass: 'green',
    poison: 'purple',
    fire: 'red',
    default: '#ccc'
  }
));

const baseStats = computed(() => {
  const stats = {
    HP: {
      current: 158,
      max: 300,
      color: 'green',
    },
    ATK: {
      current: 120,
      max: 500,
      color: 'red',
    },
    DEF: {
      current: 120,
      max: 500,
      color: 'blue',
    },
    EXP: {
      current: 900,
      max: 1000,
      color: 'cyan'
    },
  };

  Object.entries(stats).forEach(item => {
    const [key, obj] = item;
    const percent = Math.ceil((obj.current / obj.max) * 100);
    stats[key].percent = percent;
  });

  return stats;
});


const elements = computed(() => {
  const elements = ['poison', 'grass'];

  return elements;
});

function mapElementColor(color) {
  const c = elementColors.value[color];

  return c || elementColors['default'];
}

 onMounted(() => {
  show.value = true;
});
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.7s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>