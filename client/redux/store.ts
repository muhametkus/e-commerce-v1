import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './productSlice';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

// Dispatch tipi
export type AppDispatch = typeof store.dispatch;

// useAppDispatch ve useAppSelector hook'larını doğru tipte kullanabilmek için
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
