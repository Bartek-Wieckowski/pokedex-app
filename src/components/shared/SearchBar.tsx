import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema } from '@/validators/validators';
import { usePokemons } from '@/api/queries/usePokemons';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { setUserChooseFilter, setUserSearchValue, setLimit } from '@/redux/pokemons/pokemonsSlice';
import { USER_FILTER_BY_NAME, USER_FILTER_BY_TYPE } from '@/helpers/const';
import { Button } from '../ui/button';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { TbLetterA } from 'react-icons/tb';
import { GiBallPyramid } from 'react-icons/gi';

const SearchBar = () => {
  const { isError } = usePokemons();
  const dispatch = useAppDispatch();
  const userSearchValue = useAppSelector((state) => state.pokemons.userSearchValue);
  const userChooseFilter = useAppSelector((state) => state.pokemons.userChooseFilter);
  const { handleSearch } = usePokemons();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userInputValue: userSearchValue,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userText = values.userInputValue.toLowerCase();
      dispatch(setUserSearchValue(userText));
      const searchType = userChooseFilter === USER_FILTER_BY_NAME ? USER_FILTER_BY_NAME : USER_FILTER_BY_TYPE;
      handleSearch(userText, searchType);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const handleSearchOptionChange = (value: string) => {
    dispatch(setUserChooseFilter(value));
  };

  const handleInputBlur = () => {
    const inputValue = form.getValues('userInputValue');

    if (!inputValue.trim()) {
      dispatch(setUserSearchValue(''));
      dispatch(setLimit(0));
      form.clearErrors('userInputValue');
    }
  };

  return (
    <div className="px-8 flex justify-between items-start gap-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <FormField
            control={form.control}
            name="userInputValue"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Search...to send press enter" {...field} onBlur={handleInputBlur} />
                </FormControl>

                <FormMessage className="text-[10px] text-background" />
                {isError && userSearchValue.length > 0 && (
                  <p className="text-[10px] text-background">Nothing found! Enter the correct value again or check the search filter setting</p>
                )}
              </FormItem>
            )}
          />
        </form>
      </Form>

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
              <RadioGroupItem
                value={USER_FILTER_BY_NAME}
                id={USER_FILTER_BY_NAME}
                className="text-white border-white"
                onClick={() => handleSearchOptionChange(USER_FILTER_BY_NAME)}
              />
              <Label htmlFor={USER_FILTER_BY_NAME} className="cursor-pointer">
                Name
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={USER_FILTER_BY_TYPE}
                id={USER_FILTER_BY_TYPE}
                className="text-white border-white"
                onClick={() => handleSearchOptionChange(USER_FILTER_BY_TYPE)}
              />
              <Label htmlFor={USER_FILTER_BY_TYPE} className="cursor-pointer">
                Type
              </Label>
            </div>
          </RadioGroup>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchBar;
