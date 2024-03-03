import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../const';
import { getSinglePokemon } from '../apiPokemon';

export function usePokemon(pokemonId: number) {
  const {
    data: singlePokemon,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [QUERY_KEYS.singlePokemon, pokemonId],
    queryFn: () => getSinglePokemon(pokemonId),
  });

  return { singlePokemon, isLoading, isError };
}
