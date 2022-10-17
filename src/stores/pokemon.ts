import { defineStore } from 'pinia';
import api from '@/helpers/api';
import { getLocalStorage } from '@/helpers/storage';
import type { IPokemonData } from '@/model/IPokemonData';

function getStat(stats: any, name: string) {
  return stats.find((s: any) => s.stat.name === name).base_stat;
}

function getTypes(types: any) {
  return types.map((type: any) => type.type.name);
}

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [] as IPokemonData[],
  }),
  actions: {
    getFavoriteList() {
      this.pokemonList.splice(0, this.pokemonList.length);
      const favoList = JSON.parse(getLocalStorage('pokeFaverites') || '[]');
      if (favoList.length > 0) {
        favoList.forEach((favoId: any) => {
          this.getPokemonData(`https://pokeapi.co/api/v2/pokemon/${favoId}`);
        });
      }
    },
    async getPokemonList(url: string) {
      const response = await api.get(url);
      const { data } = response;

      if (data.results && data.results.length > 0) {
        data.results.forEach((result: any) => {
          this.getPokemonData(result.url);
        });
      }
    },
    async getPokemonData(url: string) {
      const response = await api.get(url);

      const pokemonData = response.data;

      this.pokemonList.push({
        id: pokemonData.id,
        name: pokemonData.name,
        image: pokemonData.sprites.other['official-artwork'].front_default,
        baseStats: {
          hp: getStat(pokemonData.stats, 'hp'),
          atk: getStat(pokemonData.stats, 'attack'),
          def: getStat(pokemonData.stats, 'defense'),
          spd: getStat(pokemonData.stats, 'speed'),
        },
        types: getTypes(pokemonData.types),
        weight: pokemonData.weight,
        height: pokemonData.height,
      });
    },
  },
});
