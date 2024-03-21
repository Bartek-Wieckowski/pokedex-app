import { motion } from 'framer-motion';
import { usePokemonByName } from '@/api/queries/usePokemonByName';
import { usePokemonByType } from '@/api/queries/usePokemonByType';
import { usePokemons } from '@/api/queries/usePokemons';
import { selectUserSearchFilter, selectUserSearchValue, useAppSelector } from '@/redux/hooks/hooks';
import { Pokemons } from '@/types/types';
import { MOTION_VARIANTS } from '@/helpers/const';
import { Button } from '@/components/ui/button';
import HeaderApp from '@/components/shared/HeaderApp';
import SearchBar from '@/components/searchBar/SearchBar';
import Loader from '@/components/shared/Loader';
import Error from '@/components/shared/Error';
import PokemonList from '@/components/shared/PokemonList';
import SkeletonApp from '@/components/shared/SkeletonApp';

const Homepage = () => {
  const userSearchValue = useAppSelector(selectUserSearchValue);
  const userChooseFilter = useAppSelector(selectUserSearchFilter);

  const { pokemons, status, error, fetchNextPage, isFetchingNextPage, hasNextPage } = usePokemons();
  const { pokemonByName, isLoading: loadingPokemonByName, isError: isErrorPokemonByName } = usePokemonByName(userSearchValue, userChooseFilter);
  const { pokemonByType, isLoading: loadingPokemonByType, isError: isErrorPokemonByType } = usePokemonByType(userSearchValue, userChooseFilter);

  const processingData = loadingPokemonByName || loadingPokemonByType || isErrorPokemonByName || isErrorPokemonByType;
  const isLoadingProcess = loadingPokemonByName || loadingPokemonByType;
  const isErrorProcess = isErrorPokemonByName || isErrorPokemonByType;

  let pokemonsVisible;

  if (pokemonByName) {
    pokemonsVisible = pokemonByName;
  } else if (pokemonByType) {
    pokemonsVisible = pokemonByType;
  } else {
    pokemonsVisible = pokemons?.pages.flat() as Pokemons[];
  }

  if (status === 'pending') {
    return <SkeletonApp type="homepage" />;
  }

  if (status === 'error') {
    return <Error msg={`Something went wrong... ${error && error.message}`} />;
  }

  if (!pokemons) {
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
        <SearchBar isError={isErrorProcess} />
        <PokemonList pokemons={pokemonsVisible} isLoading={isLoadingProcess} isError={isErrorProcess} />
        <div className={`mx-4 text-foreground text-[12px] ${processingData ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>Loaded pokemons: {pokemonsVisible.length}</div>
        <div className="flex-center my-4">
          <Button
            variant={'outline'}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className={`relative flex transition-all duration-500 ${userSearchValue.length > 0 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          >
            {isFetchingNextPage ? (
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
