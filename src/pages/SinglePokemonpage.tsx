import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { FaWeightHanging } from 'react-icons/fa';
import { CiLineHeight } from 'react-icons/ci';
import { usePokemon } from '@/api/queries/usePokemon';
import {
  calcUnits,
  getPokemonColorClass,
  shortenBaseStatsName,
} from '@/helpers/helpers';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import Loader from '@/components/shared/Loader';
import Error from '@/components/shared/Error';

const SinglePokemonpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, singlePokemon, isError } = usePokemon(Number(id));
  const pokeBGcolor = singlePokemon?.types[0].type.name as string;

  const handleClickBack = () => {
    navigate('/');
  };

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Error msg="Something went wrong..." />;
  }
  if (!singlePokemon) {
    return <Error msg="No pokemon available..." />;
  }

  return (
    <>
      <section
        className={`${getPokemonColorClass(
          pokeBGcolor,
          false
        )} w-full flex flex-col rounded-sm`}
      >
        <div className="flex-between p-3">
          <BiArrowBack
            className="text-2xl cursor-pointer"
            onClick={() => handleClickBack()}
          />
          <h1 className="text-2xl uppercase font-semibold">
            {singlePokemon.name}
          </h1>
          <div>#{singlePokemon.id}</div>
        </div>
        <Carousel className="mx-20">
          <CarouselContent>
            <CarouselItem className="my-auto">
              <img
                className="block mx-auto"
                src={
                  singlePokemon.sprites.other['official-artwork'].front_default
                }
                alt="poke1"
              />
            </CarouselItem>
            <CarouselItem className="my-auto">
              <img
                className="block mx-auto"
                src={singlePokemon.sprites.other.showdown.front_default}
                alt="poke2"
              />
            </CarouselItem>
            <CarouselItem className="my-auto">
              <img
                className="block mx-auto"
                src={singlePokemon.sprites.other.showdown.back_default}
                alt="poke3"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Card className="mx-4 mb-4 bg-background">
          <CardHeader className="gap-3">
            <div className="flex-center gap-2 text-center">
              {singlePokemon.types.map((type, typeIndex) => (
                <small
                  key={typeIndex}
                  className={`text-sm font-semibold p-2 rounded-3xl ${getPokemonColorClass(
                    type.type.name,
                    false
                  )}`}
                >
                  {type.type.name}
                </small>
              ))}
            </div>
            <CardTitle
              className={`text-md text-center uppercase ${getPokemonColorClass(
                pokeBGcolor
              )}`}
            >
              About
            </CardTitle>
            <div className="flex-between">
              <div className="flex-center flex-col gap-4">
                <div className="flex-center gap-2">
                  <FaWeightHanging className="bg-background" />
                  <p className="text-sm">
                    {calcUnits(singlePokemon.weight)} kg
                  </p>
                </div>
                <p className="text-[10px]">Weight</p>
              </div>
              <Separator orientation="vertical" className="h-10" />
              <div className="flex-center flex-col gap-4">
                <div className="flex-center gap-2">
                  <CiLineHeight className="bg-background" />
                  <p className="text-sm">{calcUnits(singlePokemon.height)} m</p>
                </div>
                <p className="text-[10px]">Height</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <h2
              className={`text-md text-center font-semibold mb-3 ${getPokemonColorClass(
                pokeBGcolor
              )}`}
            >
              BASE STATS
            </h2>
            {singlePokemon.stats.map((stat, index) => (
              <div
                className="grid grid-cols-[50px,3px,30px,1fr] gap-2 justify-center"
                key={index}
              >
                <span className="text-center">
                  {shortenBaseStatsName(stat.stat.name)}
                </span>
                <Separator orientation="vertical" className="h-6" />
                <span className="text-center">{stat.base_stat}</span>
                <Progress value={stat.base_stat} />
              </div>
            ))}
            <div className="flex-between"></div>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default SinglePokemonpage;