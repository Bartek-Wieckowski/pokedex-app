export type PokemonsType = {
  id: number;
  name: string;
  url: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
};
