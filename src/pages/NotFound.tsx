import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex-col flex-center gap-4">
      <h2 className="text-xl text-rose-500">Page not found, back to...</h2>
      <Button asChild>
        <Link to="/">homepage</Link>
      </Button>
    </div>
  );
}
