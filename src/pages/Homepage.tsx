import { usePokemons } from '@/api/queries/usePokemons';
import HeaderApp from '@/components/shared/HeaderApp';
import Loader from '@/components/shared/Loader';
import Error from '@/components/shared/Error';
import PokemonList from '@/components/shared/PokemonList';
import SearchBar from '@/components/shared/SearchBar';
import { Button } from '@/components/ui/button';

const Homepage = () => {
  const { pokemons, isLoading, isError, handleLoadMore, isButtonLoading } =
    usePokemons();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error msg="Something went wrong..." />;
  }
  if (!pokemons) {
    return <Error msg="No pokemons available..." />;
  }

  return (
    <>
      <section className="bg-rose-600 w-full flex flex-col rounded-sm">
        <HeaderApp />
        <SearchBar />
        <PokemonList pokemons={pokemons} />
        <div className="mx-4 text-foreground text-[12px]">
          Loaded pokemons: {pokemons.length}
        </div>
        <div className="flex-center my-4">
          <Button
            variant={'outline'}
            onClick={handleLoadMore}
            disabled={isButtonLoading}
            className="relative flex"
          >
            {isButtonLoading ? (
              <div className='flex gap-2'>
                <Loader type="text-sm" />
                <span>Loading...</span>
              </div>
            ) : (
              'Load more'
            )}
          </Button>
        </div>
      </section>
    </>
  );
};

export default Homepage;
