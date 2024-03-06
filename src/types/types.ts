export type Pokemons = {
  id: number;
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
  types: PokemonSpecies[];
};

export type SinglePokemon = {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
      showdown: {
        front_default: string;
        back_default: string;
      };
    };
  };
  types: PokemonSpecies[];
  stats: PokemonStats[];
  weight: number;
  height: number;
};

export type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonSpecies = {
  type: {
    name: string;
    url: string;
  };
};

export type PokemonByCategory = {
  pokemon: {
    name: string;
    url: string;
  };
};