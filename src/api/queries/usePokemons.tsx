import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllPokemons } from '../apiPokemon';
import { QUERY_KEYS } from '../const';

export const usePokemons = () => {
  const offset = 0;
  const [limit, setLimit] = useState(20);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const {
    isLoading,
    data: pokemons,
    isError,
    refetch,
  } = useQuery({
    queryKey: [QUERY_KEYS.pokemons],
    queryFn: () => getAllPokemons(offset, limit),
  });

  useEffect(() => {
    const fetchData = async () => {
      if (limit > 20) {
        setIsButtonLoading(true);
        await refetch();
        setIsButtonLoading(false);
      }
    };
    fetchData();
  }, [limit, refetch]);

  const handleLoadMore = () => {
    setLimit((prevLimit) => prevLimit + 20);
  };

  return { isLoading, pokemons, isError, handleLoadMore, isButtonLoading };
};
