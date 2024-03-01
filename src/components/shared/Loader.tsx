import { BiLoaderAlt } from 'react-icons/bi';

type LoaderProps = {
  type?: string;
};

const Loader = ({ type = 'text-5xl' }: LoaderProps) => {
  return (
    <div className="flex-center w-full">
      <BiLoaderAlt className={`animate-spin ${type}`} />
    </div>
  );
};

export default Loader;
