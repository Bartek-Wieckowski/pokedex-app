import { SinglePokemon } from '@/types/types';
import { CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { getPokemonColorClass, shortenBaseStatsName } from '@/helpers/helpers';
import { useMemo } from 'react';

type CardContentComponentProps = {
  singlePokemon: SinglePokemon;
  pokeBGcolor: string;
};

const CardContentComponent = ({ singlePokemon, pokeBGcolor }: CardContentComponentProps) => {
  const shortenStatsName = useMemo(() => {
    return (statName: string) => shortenBaseStatsName(statName);
  }, []);

  return (
    <CardContent>
      <h2 className={`text-md text-center font-semibold mb-3 ${getPokemonColorClass(pokeBGcolor)}`}>BASE STATS</h2>
      {singlePokemon.stats.map((stat, index) => (
        <div className="grid grid-cols-[50px,3px,30px,1fr] gap-2 justify-center" key={index}>
          <span className="text-center">{shortenStatsName(stat.stat.name)}</span>
          <Separator orientation="vertical" className="h-6" />
          <span className="text-center">{stat.base_stat}</span>
          <Progress value={stat.base_stat} />
        </div>
      ))}
      <div className="flex-between"></div>
    </CardContent>
  );
};

export default CardContentComponent;
