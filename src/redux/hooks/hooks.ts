import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppDispatch, RootState } from '../store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectUserSearchValue = (state: RootState) => state.pokemons.userSearchValue;
export const selectUserSearchFilter = (state: RootState) => state.pokemons.userChooseFilter;