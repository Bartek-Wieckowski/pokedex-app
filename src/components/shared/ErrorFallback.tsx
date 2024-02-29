import { Button } from '@/components/ui/button';

type ErrorFallbackProps = {
  resetErrorBoundary: () => void;
};
const ErrorFallback = ({ resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-5xl text-rose-500">Something went wrong...</h2>
      <Button variant="outline" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
};

export default ErrorFallback;
