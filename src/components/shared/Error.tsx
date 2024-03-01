import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

type ErrorProps = {
  msg: string;
};

const Error = ({ msg }: ErrorProps) => {
  return (
    <>
      <h2 className="text-xl text-rose-500 mb-3">{msg}</h2>
      <Button asChild variant="destructive">
        <Link to="/">Try again</Link>
      </Button>
    </>
  );
};

export default Error;
