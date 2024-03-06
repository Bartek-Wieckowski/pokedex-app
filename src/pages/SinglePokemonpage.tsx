import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { usePokemon } from '@/api/queries/usePokemon';
import { getPokemonColorClass } from '@/helpers/helpers';
import { MOTION_VARIANTS } from '@/helpers/const';
import { Card } from '@/components/ui/card';
import Error from '@/components/shared/Error';
import SkeletonApp from '@/components/shared/SkeletonApp';
import CarouselComponent from '@/components/singlePokemon/CarouselComponent';
import CardHeaderComponent from '@/components/singlePokemon/CardHeaderComponent';
import CardContentComponent from '@/components/singlePokemon/CardContentComponent';

const SinglePokemonpage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { singlePokemon, isLoading, isError } = usePokemon(Number(id));
  const pokeBGcolor = singlePokemon?.types[0].type.name as string;
  const imageUrls = [
    singlePokemon?.sprites.other['official-artwork'].front_default,
    singlePokemon?.sprites.other.showdown.front_default,
    singlePokemon?.sprites.other.showdown.back_default,
  ].filter((url) => url !== undefined) as string[];

  const handleClickBack = () => {
    navigate('/');
  };

  if (isLoading) {
    return <SkeletonApp type="pokemonDetails" />;
  }
  if (isError) {
    return <Error msg="Something went wrong..." />;
  }
  if (!singlePokemon) {
    return <Error msg="No pokemon available..." />;
  }

  return (
    <>
      <motion.section
        className={`${getPokemonColorClass(pokeBGcolor, false)} w-full flex flex-col rounded-sm`}
        custom={{ direction: 'forward' }}
        initial="initial"
        animate="in"
        exit="out"
        variants={MOTION_VARIANTS}
      >
        <div className="flex-between p-3">
          <BiArrowBack className="text-2xl cursor-pointer" onClick={() => handleClickBack()} />
          <h1 className="text-2xl uppercase font-semibold">{singlePokemon.name}</h1>
          <div>#{singlePokemon.id}</div>
        </div>
        <CarouselComponent imageUrls={imageUrls} />
        <Card className="mx-4 mb-4 bg-background">
          <CardHeaderComponent singlePokemon={singlePokemon} pokeBGcolor={pokeBGcolor} />
          <CardContentComponent singlePokemon={singlePokemon} pokeBGcolor={pokeBGcolor} />
        </Card>
      </motion.section>
    </>
  );
};

export default SinglePokemonpage;
