import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../const';
import { getPokemonByType } from '../apiPokemon';
import { USER_FILTER_BY_TYPE } from '@/helpers/const';

export function usePokemonByType(pokemonType: string, filterType: string) {
  const {
    data: pokemonByType,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.pokemons, pokemonType, filterType],
    queryFn: () => getPokemonByType(pokemonType),
    enabled: !!pokemonType && filterType === USER_FILTER_BY_TYPE,
  });

  return { pokemonByType, isLoading, isError };
}
