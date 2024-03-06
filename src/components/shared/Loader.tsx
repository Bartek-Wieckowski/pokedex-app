import { BiLoaderAlt } from 'react-icons/bi';

type LoaderProps = {
  type?: string;
  fallbackLoader?: boolean;
};

const Loader = ({ type = 'text-5xl', fallbackLoader = false }: LoaderProps) => {
  return (
    <div className={`flex-center w-full h-full ${fallbackLoader && 'absolute'}`}>
      <BiLoaderAlt className={`animate-spin ${type}`} />
    </div>
  );
};

export default Loader;
