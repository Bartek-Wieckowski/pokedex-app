import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllPokemons, getPokemonByName, getPokemonByType } from '../apiPokemon';
import { QUERY_KEYS } from '../const';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { setUserSearchValue, setLimit } from '@/redux/pokemons/pokemonsSlice';
import { USER_FILTER_BY_NAME, USER_FILTER_BY_TYPE, OFFSET_GET_POKEMONS } from '@/helpers/const';

export const usePokemons = () => {
  const dispatch = useAppDispatch();
  const limit = useAppSelector((state) => state.pokemons.limit);
  const userSearchValue = useAppSelector((state) => state.pokemons.userSearchValue);
  const userChooseFilter = useAppSelector((state) => state.pokemons.userChooseFilter);
  const [searchQuery, setSearchQuery] = useState(userSearchValue);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const {
    data: pokemons,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEYS.pokemons],
    queryFn: () => {
      if (userChooseFilter === USER_FILTER_BY_NAME) {
        return searchQuery ? getPokemonByName(searchQuery) : getAllPokemons(OFFSET_GET_POKEMONS, limit);
      } else if (userChooseFilter === USER_FILTER_BY_TYPE) {
        return searchQuery ? getPokemonByType(searchQuery) : getAllPokemons(OFFSET_GET_POKEMONS, limit);
      } else {
        return getAllPokemons(OFFSET_GET_POKEMONS, limit);
      }
    },
    staleTime: Infinity,
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsButtonLoading(true);
      await refetch();
      setIsButtonLoading(false);
    };

    fetchData();
  }, [limit, searchQuery, refetch]);

  const handleLoadMore = () => {
    if (limit === 0) {
      dispatch(setLimit(limit + 40));
    } else {
      dispatch(setLimit(limit + 20));
    }
    dispatch(setUserSearchValue(''));
  };

  const handleSearch = (value: string, type: typeof USER_FILTER_BY_NAME | typeof USER_FILTER_BY_TYPE) => {
    if (type === USER_FILTER_BY_NAME) {
      setSearchQuery(value);
    } else if (type === USER_FILTER_BY_TYPE) {
      setSearchQuery(value);
    }
  };

  return { pokemons, isLoading, isFetching, isError, isButtonLoading, handleLoadMore, handleSearch };
};
