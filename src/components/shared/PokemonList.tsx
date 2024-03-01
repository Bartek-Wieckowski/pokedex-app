import { PokemonsType } from '@/types/types';
import PokemonItem from './PokemonItem';

type PokemonListProps = {
  pokemons: PokemonsType[];
};

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="bg-white rounded-md mx-4 mt-8 mb-4 h-[300px] overflow-y-scroll custom-scrollbar">
      <ul className="flex-center flex-wrap gap-2 py-2">
        {pokemons?.map((pokemon, index) => (
          <li key={pokemon.id}>
            <PokemonItem pokemon={pokemon} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
