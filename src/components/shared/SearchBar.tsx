import { Input } from '@/components/ui/input';

import { TbCircleLetterA, GiBallPyramid } from 'react-icons/tb';
import { Button } from '../ui/button';
const SearchBar = () => {
  return (
    <div className="px-8 flex-between gap-4">
      <Input placeholder="Search" />
      <Button>
        <TbCircleLetterA />
      </Button>
    </div>
  );
};

export default SearchBar;
