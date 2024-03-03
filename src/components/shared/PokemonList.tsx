import { useAppSelector } from '@/redux/hooks/hooks';
import { PokemonsType } from '@/types/types';
import PokemonItem from './PokemonItem';
import Loader from './Loader';

type PokemonListProps = {
  pokemons: PokemonsType[];
  isFetching: boolean;
};

const PokemonList = ({ pokemons, isFetching }: PokemonListProps) => {
  const userSearchValue = useAppSelector((state) => state.pokemons.userSearchValue);

  return (
    <div className="bg-background mx-4 mt-8 mb-4 h-[300px] overflow-y-scroll custom-scrollbar relative">
      {userSearchValue.length > 0 && isFetching ? (
        <Loader />
      ) : (
        <ul className="flex-center flex-wrap gap-2 py-2">
          {pokemons?.map((pokemon) => (
            <li key={pokemon.id}>
              <PokemonItem pokemon={pokemon} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
