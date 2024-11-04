import { AppDispatch, RootState } from '../store';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
