import { TypedUseSelectorHook, useSelector } from 'react-redux';

const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export { useAppSelector };
