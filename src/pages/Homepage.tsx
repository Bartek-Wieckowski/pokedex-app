import { useEffect } from 'react';
import { usePokemons } from '@/api/queries/usePokemons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { setPokemons } from '@/redux/pokemons/pokemonsSlice';
import { Button } from '@/components/ui/button';
import HeaderApp from '@/components/shared/HeaderApp';
import Loader from '@/components/shared/Loader';
import Error from '@/components/shared/Error';
import PokemonList from '@/components/shared/PokemonList';
import SearchBar from '@/components/shared/SearchBar';
import SkeletonApp from '@/components/shared/SkeletonApp';
import { motion } from 'framer-motion';
import { MOTION_VARIANTS } from '@/helpers/const';

const Homepage = () => {
  const { pokemons, isLoading, isFetching, isError, handleLoadMore, isButtonLoading } = usePokemons();
  const dispatch = useAppDispatch();
  const userSearchValue = useAppSelector((state) => state.pokemons.userSearchValue);
  const storedPokemons = useAppSelector((state) => state.pokemons.pokemons);

  useEffect(() => {
    if (pokemons && pokemons.length > 0) {
      dispatch(setPokemons(pokemons));
    }
  }, [pokemons, dispatch]);

  if (isLoading) {
    return <SkeletonApp type="homepage" />;
  }
  if (isError && userSearchValue.length === 0) {
    return <Error msg="Something went wrong..." />;
  }
  if (!storedPokemons) {
    return <Error msg="No pokemons available..." />;
  }

  return (
    <>
      <motion.section
        className="bg-rose-600 w-full flex flex-col rounded-sm"
        custom={{ direction: 'backward' }}
        initial="initial"
        animate="in"
        exit="out"
        variants={MOTION_VARIANTS}
      >
        <HeaderApp />
        <SearchBar />

        <PokemonList pokemons={storedPokemons} isFetching={isFetching} />
        <div className="mx-4 text-foreground text-[12px]">Loaded pokemons: {storedPokemons.length}</div>
        <div className="flex-center my-4">
          <Button
            variant={'outline'}
            onClick={handleLoadMore}
            disabled={isButtonLoading}
            className={`relative flex transition-all duration-500 ${userSearchValue.length > 0 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          >
            {isButtonLoading ? (
              <div className="flex gap-2">
                <Loader type="text-sm" />
                <span>Loading...</span>
              </div>
            ) : (
              'Load more'
            )}
          </Button>
        </div>
      </motion.section>
    </>
  );
};

export default Homepage;
