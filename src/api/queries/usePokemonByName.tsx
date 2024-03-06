import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../const';
import { getPokemonByName } from '../apiPokemon';
import { USER_FILTER_BY_NAME } from '@/helpers/const';

export function usePokemonByName(pokemonName: string, filterType: string) {
  const {
    data: pokemonByName,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.pokemons, pokemonName, filterType],
    queryFn: () => getPokemonByName(pokemonName),
    enabled: !!pokemonName && filterType === USER_FILTER_BY_NAME,
  });

  return { pokemonByName, isLoading, isError };
}
