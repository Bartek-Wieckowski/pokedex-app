import { Pokemons } from '@/types/types';
import PokemonItem from './PokemonItem';
import Loader from './Loader';

type PokemonListProps = {
  pokemons: Pokemons[];
  isLoading: boolean;
  isError: boolean;
};

const PokemonList = ({ pokemons, isLoading, isError }: PokemonListProps) => {
  return (
    <div className="bg-background mx-4 mt-8 mb-4 h-[300px] overflow-y-scroll custom-scrollbar relative">
      {isLoading && <Loader />}
      {isError && (
        <p className="flex flex-col justify-center h-full text-center text-sm text-rose-400 px-4">
          Try entering a different Pokémon/type of Pokémon or choose the right filter for your value{' '}
        </p>
      )}
      {!isLoading && !isError && (
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
