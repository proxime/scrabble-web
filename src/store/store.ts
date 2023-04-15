import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { rootApi } from './api/root';
import gameSlice from './gameSlice';
import modalsSlice from './modalsSlice';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        [rootApi.reducerPath]: rootApi.reducer,
        modals: modalsSlice,
        game: gameSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
