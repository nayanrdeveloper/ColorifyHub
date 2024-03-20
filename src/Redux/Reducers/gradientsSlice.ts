import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GRADIENTS_INITIAL_STATE } from '../InitialState/gradientsInitialState';
import { IGradient } from '@/Interface/gradientsInterface';

const gradientSlice = createSlice({
    name: 'gradients',
    initialState: GRADIENTS_INITIAL_STATE,
    reducers: {
        setGradients: (state, action: PayloadAction<IGradient[]>) => {
            state.gradients = action.payload;
        },
        appendGradients: (state, action: PayloadAction<IGradient[]>) => {
            state.gradients = [...state.gradients, ...action.payload];
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setGradients, appendGradients, setPage, setLoading } =
    gradientSlice.actions;

export const gradientsReducers = gradientSlice.reducer;
