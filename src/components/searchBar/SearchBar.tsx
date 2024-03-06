import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema, SearchSchema } from '@/validators/validators';
import { selectUserSearchValue, useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { setUserChooseFilter, setUserSearchValue } from '@/redux/pokemons/pokemonsSlice';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import PopoverComponent from './PopoverComponent';

type SearchBarProps = {
  isError: boolean;
};

const SearchBar = ({ isError }: SearchBarProps) => {
  const dispatch = useAppDispatch();
  const userSearchValue = useAppSelector(selectUserSearchValue);

  const form = useForm<SearchSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userInputValue: userSearchValue,
    },
  });

  function onSubmit(values: SearchSchema) {
    const userText = values.userInputValue.toLowerCase();
    dispatch(setUserSearchValue(userText));
  }

  const handleSearchOptionChange = (value: string) => {
    dispatch(setUserChooseFilter(value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim();
    form.setValue('userInputValue', inputValue);
  };

  const handleInputBlur = () => {
    const inputValue = form.getValues('userInputValue');

    if (!inputValue) {
      dispatch(setUserSearchValue(''));
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
                  <Input placeholder="Search...to send press enter" {...field} onBlur={handleInputBlur} onChange={handleInputChange} />
                </FormControl>
                <FormMessage className="text-[10px] text-background" />
                {isError && <p className="text-[10px] text-background">Nothing found! Enter the correct value again or check the search filter setting</p>}
              </FormItem>
            )}
          />
        </form>
      </Form>

      <PopoverComponent onClick={handleSearchOptionChange} />
    </div>
  );
};

export default SearchBar;
