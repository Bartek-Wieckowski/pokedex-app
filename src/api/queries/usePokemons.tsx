import { useInfiniteQuery } from '@tanstack/react-query';
import { getAllPokemons } from '../apiPokemon';
import { QUERY_KEYS } from '../const';
import { OFFSET_GET_POKEMONS, LIMIT_GET_POKEMONS } from '@/helpers/const';

export const usePokemons = () => {
  const {
    data: pokemons,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.pokemons],
    queryFn: ({ pageParam }) => getAllPokemons(LIMIT_GET_POKEMONS, pageParam * OFFSET_GET_POKEMONS),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length : undefined;
      return nextPage;
    },
  });

  return { pokemons, status, error, fetchNextPage, isFetchingNextPage, hasNextPage };
};
