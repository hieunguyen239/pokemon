import { usePokemonStore } from '@/stores/pokemon';

export default () => {
  const pokemonStore = usePokemonStore();
  const { pokemonList, getPokemonData,  getPokemonList } = pokemonStore;

  return { pokemonList, getPokemonData, getPokemonList };
};
