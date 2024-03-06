import { USER_FILTER_BY_NAME, USER_FILTER_BY_TYPE } from '@/helpers/const';
import { Label } from '@radix-ui/react-label';
import { GiBallPyramid } from 'react-icons/gi';
import { TbLetterA } from 'react-icons/tb';
import { Button } from '../ui/button';
import { selectUserSearchFilter, useAppSelector } from '@/redux/hooks/hooks';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

type PopoverComponentProps = {
  onClick: (value: string) => void;
};

const PopoverComponent = ({ onClick }: PopoverComponentProps) => {
  const userChooseFilter = useAppSelector(selectUserSearchFilter);

  return (
    <Popover>
      <PopoverTrigger asChild>
        {userChooseFilter === USER_FILTER_BY_NAME ? (
          <Button>
            <TbLetterA className="text-xl" />
          </Button>
        ) : (
          <Button>
            <GiBallPyramid className="text-xl" />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-[100px] bg-rose-600 text-white">
        <p className="text-sm text-white font-semibold mb-3">Filter by:</p>
        <RadioGroup defaultValue={userChooseFilter}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={USER_FILTER_BY_NAME} id={USER_FILTER_BY_NAME} className="text-white border-white" onClick={() => onClick(USER_FILTER_BY_NAME)} />
            <Label htmlFor={USER_FILTER_BY_NAME} className="cursor-pointer">
              Name
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={USER_FILTER_BY_TYPE} id={USER_FILTER_BY_TYPE} className="text-white border-white" onClick={() => onClick(USER_FILTER_BY_TYPE)} />
            <Label htmlFor={USER_FILTER_BY_TYPE} className="cursor-pointer">
              Type
            </Label>
          </div>
        </RadioGroup>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverComponent;
