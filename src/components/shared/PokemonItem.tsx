import { getPokemonColorClass } from '@/helpers/helpers';
import { PokemonsType } from '@/types/types';

type PokemonItemProps = {
  pokemon: PokemonsType;
  index: number;
};

const PokemonItem = ({ pokemon, index }: PokemonItemProps) => {
  return (
    <div className="rounded-md border cursor-pointer hover:shadow-lg transition-shadow">
      <div className="flex flex-col gap-2 items-center p-2">
        <small className="text-right self-end">#{index + 1}</small>
        <img
          key={index}
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
        <small className="text-sm font-bold text-primary">{pokemon.name}</small>
      </div>
    </div>
  );
};

export default PokemonItem;
