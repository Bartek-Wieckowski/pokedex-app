import { CardHeader, CardTitle } from '@/components/ui/card';
import { FaWeightHanging } from 'react-icons/fa';
import { CiLineHeight } from 'react-icons/ci';
import { Separator } from '@/components/ui/separator';
import { useMemo } from 'react';
import { calcUnits, getPokemonColorClass } from '@/helpers/helpers';
import { SinglePokemon } from '@/types/types';

type CardHeaderComponentProps = {
  singlePokemon: SinglePokemon;
  pokeBGcolor: string;
};

const CardHeaderComponent = ({ singlePokemon, pokeBGcolor }: CardHeaderComponentProps) => {
  const pokemonWeight = useMemo(() => {
    if (!singlePokemon) {
      return '-';
    }
    return calcUnits(singlePokemon.weight);
  }, [singlePokemon]);

  const pokemonHeight = useMemo(() => {
    if (!singlePokemon) {
      return '-';
    }
    return calcUnits(singlePokemon.weight);
  }, [singlePokemon]);

  return (
    <CardHeader className="gap-3">
      <div className="flex-center gap-2 text-center">
        {singlePokemon.types.map((type, typeIndex) => (
          <small key={typeIndex} className={`text-sm font-semibold p-2 rounded-3xl ${getPokemonColorClass(type.type.name, false)}`}>
            {type.type.name}
          </small>
        ))}
      </div>
      <CardTitle className={`text-md text-center uppercase ${getPokemonColorClass(pokeBGcolor)}`}>About</CardTitle>
      <div className="flex-between">
        <div className="flex-center flex-col gap-4">
          <div className="flex-center gap-2">
            <FaWeightHanging className="bg-background" />
            <p className="text-sm">{pokemonWeight} kg</p>
          </div>
          <p className="text-[10px]">Weight</p>
        </div>
        <Separator orientation="vertical" className="h-10" />
        <div className="flex-center flex-col gap-4">
          <div className="flex-center gap-2">
            <CiLineHeight className="bg-background" />
            <p className="text-sm">{pokemonHeight} m</p>
          </div>
          <p className="text-[10px]">Height</p>
        </div>
      </div>
    </CardHeader>
  );
};

export default CardHeaderComponent;
