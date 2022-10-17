import { usePokemonStore } from '@/stores/pokemon';

export default () => {
  const pokemonStore = usePokemonStore();
  const { pokemonList, getPokemonData, getFavoriteList, getPokemonList } = pokemonStore;

  return { pokemonList, getPokemonData, getFavoriteList, getPokemonList };
};
