import { usePokemonStore } from '@/stores/pokemon';

export default () => {
  const pokemonStore = usePokemonStore();
  const { pokemonList, getPokemonList } = pokemonStore;

  return { pokemonList, getPokemonList };
};
