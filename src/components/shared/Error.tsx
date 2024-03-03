import { Button } from '../ui/button';
import { Link, useLocation } from 'react-router-dom';

type ErrorProps = {
  msg: string;
};

const Error = ({ msg }: ErrorProps) => {
  const location = useLocation();

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <h2 className="text-xl text-rose-500 mb-3">{msg}</h2>
      <Button asChild variant="destructive" onClick={refreshPage}>
        <Link to={location.pathname}>Try again</Link>
      </Button>
    </>
  );
};

export default Error;
