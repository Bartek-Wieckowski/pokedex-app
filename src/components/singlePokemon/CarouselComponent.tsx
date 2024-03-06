import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

type CarouselComponentProps = {
  imageUrls: string[];
};

const CarouselComponent = ({ imageUrls }: CarouselComponentProps) => {
  return (
    <Carousel className="mx-20">
      <CarouselContent>
        {imageUrls.map((imageUrl, index) => (
          <CarouselItem key={index} className="my-auto">
            <img className="block mx-auto" src={imageUrl || '/assets/question_mark.png'} alt={`poke${index + 1}`} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselComponent;
