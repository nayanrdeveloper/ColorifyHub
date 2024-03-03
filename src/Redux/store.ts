import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
// import type { TypedUseSelectorHook } from 'react-redux';
import rootReducers from './Reducers';

export const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleWare =>
        getDefaultMiddleWare({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
