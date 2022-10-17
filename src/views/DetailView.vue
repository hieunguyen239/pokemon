<template>
  <Transition>
    <div class="detail relative" v-if="show">
      <a
        class="absolute right-10 top-10 z-50 cursor-pointer"
        @click="handleFav"
        :class="{ favorited: isFavorite }"
      >
        <img
          src="@/assets/heart.svg"
          alt=""
          srcset=""
          class="w-14 h-14 fav-icon"
        />
      </a>
      <div class="p-4 text-white">
        <router-link :to="`/listing/`">
          &lt; Back to listing
        </router-link>
      </div>
      <figure class="text-center">
        <img
          :src="pokemon.image"
          alt=""
          srcset=""
          class="rounded-full inline-block"
        />

        <figcaption>
          <h1 class="font-bold text-xl text-center my-2 text-slate-50 tracking-wider">{{ pokemon?.name?.toUpperCase() }}</h1>
        </figcaption>
      </figure>

      <section class="px-4 py-2 flex justify-center text-center tracking-wider">
        <div
          class="py-2 px-4 text-white rounded-full shadow-sm mx-3 uppercase w-32 font-semibold"
          v-for="element in pokemon.types"
          :key="element"
          :style="{ backgroundColor: mapElementColor(element) }"
        >
          {{ element }}
        </div>
      </section>
      <section class="px-4 py-2 flex justify-center text-center text-slate-50">
        <div class="weight w-32">
          <div class="py-2 px-4 font-bold">{{ pokemon.weight }} KG</div>
          <div>Weight</div>
        </div>
        <div class="height w-32">
          <div class="py-2 px-4 font-bold">{{ pokemon.height }} M</div>
          <div>Height</div>
        </div>
      </section>
      <section class="px-4 text-slate-50">
        <h1 class="font-bold text-xl text-center my-2">Base Stats</h1>
        <div v-for="(stat, key) in baseStats" class="mt-3">
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-blue-700 dark:text-white">{{
              key
            }}</span>
            <span class="text-sm font-medium text-blue-700 dark:text-white"
              >{{ stat.current }} / {{ stat.max }}</span
            >
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              class="h-2.5 rounded-full"
              :style="{
                width: `${stat.percent}%`,
                backgroundColor: stat.color,
              }"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </Transition>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getLocalStorage, setLocalStorage } from '@/helpers/storage';
import usePokemon from '@/compotitions/usePokemon';

const { pokemonList, getPokemonData } = usePokemon();

const route = useRoute();
const id = Number(route.params.id);
const favoriteList = ref(JSON.parse(getLocalStorage('pokeFaverites') || '[]'));
const show = ref(false);
let pokemon = ref({});

async function fetchPokemonData() {
  await getPokemonData(`https://pokeapi.co/api/v2/pokemon/${id}`);
}
const elementColors = computed(() => ({
  grass: 'green',
  poison: 'purple',
  fire: 'red',
  default: '#ddd',
  water: 'blue',
}));

const isFavorite = computed(() => {
  return favoriteList.value.indexOf(id) > -1;
});

const baseStats = computed(() => {
  if (!pokemon.value.baseStats) return {};
  const stats = {
    HP: {
      current: pokemon.value.baseStats.hp,
      max: 300,
      color: 'green',
    },
    ATK: {
      current: pokemon.value.baseStats.atk,
      max: 500,
      color: 'red',
    },
    DEF: {
      current: pokemon.value.baseStats.def,
      max: 500,
      color: 'blue',
    },
    SPD: {
      current: pokemon.value.baseStats.spd,
      max: 1000,
      color: 'cyan',
    },
  };

  Object.entries(stats).forEach((item) => {
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

  return c || elementColors.value['default'];
}

function handleFav() {
  if (favoriteList.value.indexOf(id) === -1) {
    favoriteList.value.push(id);
    pokemonList.push(pokemon.value);
  } else {
    const pokeindex = pokemonList.indexOf(id);
    pokemonList.splice(pokeindex, 1);
    favoriteList.value = favoriteList.value.filter((i) => i !== id);
  }

  setLocalStorage('pokeFaverites', JSON.stringify(favoriteList.value));
}

onMounted(async () => {
  show.value = true;
  if (!pokemonList.length) {
    await fetchPokemonData();
  }
  pokemon.value = pokemonList.find((p) => p.id === id);
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

.fav-icon {
  filter: invert(0.5);
}

.favorited img {
  filter: invert(1);
}

.detail {
  background: #29292c;
}

.mt-3:last-child {
  padding-bottom: 20px;
}
</style>
