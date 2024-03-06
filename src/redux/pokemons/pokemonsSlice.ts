import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { USER_FILTER_BY_NAME } from '@/helpers/const';

type UserSearchFilterPokemonState = {
  userSearchValue: string;
  userChooseFilter: string;
};

const initialState: UserSearchFilterPokemonState = {
  userSearchValue: '',
  userChooseFilter: USER_FILTER_BY_NAME,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setUserSearchValue: (state, action: PayloadAction<string>) => {
      state.userSearchValue = action.payload;
    },
    setUserChooseFilter: (state, action: PayloadAction<string>) => {
      state.userChooseFilter = action.payload;
    },
  },
});

export const { setUserSearchValue, setUserChooseFilter } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
