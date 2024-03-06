import axios from 'axios';
import { BASE_API_URL } from './const';
import { Pokemons, SinglePokemon, PokemonByCategory } from '@/types/types';

export async function getAllPokemons(limit: number, offset: number): Promise<Pokemons[]> {
  try {
    const response = await axios.get(`${BASE_API_URL}/pokemon/?limit=${limit}&offset=${offset}`);
    const pokemons = response.data.results;

    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon: Pokemons) => {
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

export async function getSinglePokemon(pokemonId: number): Promise<SinglePokemon> {
  try {
    const response = await axios.get(`${BASE_API_URL}/pokemon/${pokemonId}`);
    const singlePokemon = response.data;

    return singlePokemon;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPokemonByName(value: string): Promise<Pokemons[]> {
  try {
    const response = await axios.get(`${BASE_API_URL}/pokemon/${value}`);
    const pokemonByName = response.data;

    return [pokemonByName];
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPokemonByType(value: string): Promise<Pokemons[]> {
  try {
    const response = await axios.get(`${BASE_API_URL}/type/${value}`);
    const pokemons = response.data.pokemon;

    const detailedPokemons = await Promise.all(
      pokemons.map(async (pokemon: PokemonByCategory) => {
        const detailedResponse = await axios.get(pokemon.pokemon.url);
        return detailedResponse.data;
      })
    );

    return detailedPokemons;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
