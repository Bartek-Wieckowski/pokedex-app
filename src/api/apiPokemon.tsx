import axios from 'axios';
import { BASE_API_URL } from './const';
import { PokemonsType } from '@/types/types';

export async function getAllPokemons(
  offset: number,
  limit: number
): Promise<PokemonsType[]> {
  try {
    const response = await axios.get(
      `${BASE_API_URL}/pokemon/?offset=${offset}&limit=${limit}`
    );
    const pokemons = response.data.results;

    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon: PokemonsType) => {
        const detailedResponse = await axios.get(pokemon.url);
        return detailedResponse.data;
      })
    );

    return detailedPokemons;
  } catch (error) {
    console.error(error);
    throw error;
  }
}