import { Skeleton } from '@/components/ui/skeleton';

type SkeletonAppProps = {
  type: string;
};

const SkeletonApp = ({ type }: SkeletonAppProps) => {
  if (type === 'homepage') {
    return (
      <Skeleton className="bg-foreground w-full h-[600px] flex flex-col rounded-sm gap-4">
        <div className="flex-start gap-4 p-4">
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <div className="px-8 flex justify-between items-start gap-4">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-[50px]" />
        </div>
        <div className="mx-4 mt-6 mb-4 h-full">
          <Skeleton className="h-full w-full" />
        </div>
        <Skeleton className="h-4 w-[150px] mx-4" />
        <div className="flex-center my-4">
          <Skeleton className="h-10 w-[100px]" />
        </div>
      </Skeleton>
    );
  }
  if (type === 'pokemonDetails') {
    return (
      <Skeleton className="bg-foreground w-full h-[600px] flex flex-col rounded-sm gap-2">
        <div className="flex-between p-3">
          <Skeleton className="h-8 w-[50px]" />
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-8 w-[50px]" />
        </div>
        <div className="mx-4 mt-4 mb-4 h-[225px]">
          <Skeleton className="h-full w-full" />
        </div>
        <div className="mx-4 mb-4 h-[375px]">
          <Skeleton className="h-full w-full" />
        </div>
      </Skeleton>
    );
  }
};

export default SkeletonApp;
