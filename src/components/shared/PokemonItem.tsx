import { getPokemonColorClass } from '@/helpers/helpers';
import { Pokemons } from '@/types/types';
import { Link } from 'react-router-dom';

type PokemonItemProps = {
  pokemon: Pokemons;
};

const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`}>
      <div className="rounded-md border cursor-pointer hover:shadow-lg transition-shadow">
        <div className="flex flex-col gap-2 items-center p-2">
          <small className="text-right self-end">#{pokemon.id}</small>
          <img
            key={pokemon.id}
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width={80}
            height={80}
            className="object-cover"
          />
          <div className="flex gap-1">
            {pokemon?.types.map((type, typeIndex) => (
              <small
                key={typeIndex}
                className={`text-sm font-semibold ${getPokemonColorClass(
                  type.type.name
                )}`}
              >
                {type.type.name}
              </small>
            ))}
          </div>
          <small className="text-sm font-bold text-primary">
            {pokemon.name}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default PokemonItem;
