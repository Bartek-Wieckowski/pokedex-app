import { PokemonsType } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { USER_FILTER_BY_NAME } from '@/helpers/const';

type PokemonState = {
  pokemons: PokemonsType[];
  userSearchValue: string;
  userChooseFilter: string;
  limit: number;
};

const initialState: PokemonState = {
  pokemons: [],
  userSearchValue: '',
  userChooseFilter: USER_FILTER_BY_NAME,
  limit: 20,
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<PokemonsType[]>) => {
      state.pokemons = action.payload;
    },
    setUserSearchValue: (state, action: PayloadAction<string>) => {
      state.userSearchValue = action.payload;
    },
    setUserChooseFilter: (state, action: PayloadAction<string>) => {
      state.userChooseFilter = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { setPokemons, setUserSearchValue, setUserChooseFilter, setLimit } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
