export interface IPokemonData {
  id: number;
  name: string;
  image: string;
  baseStats: {
    hp: number;
    atk: number;
    def: number;
    spd: number;
  };
}
