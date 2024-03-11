import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PALETTE_INITIAL_STATE } from '../InitialState/palatteInitialState';
import { IPaletteItem } from '@/Interface/paletteInterface';

const paletteSlice = createSlice({
    name: 'palette',
    initialState: PALETTE_INITIAL_STATE,
    reducers: {
        setPalettes: (state, action: PayloadAction<IPaletteItem[]>) => {
            state.palettes = action.payload;
        },
        appendPalettes: (state, action: PayloadAction<IPaletteItem[]>) => {
            state.palettes = [...state.palettes, ...action.payload];
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
    },
});

export const { setPalettes, appendPalettes, setPage, setLoading } =
    paletteSlice.actions;

export const paletteReducers = paletteSlice.reducer;
