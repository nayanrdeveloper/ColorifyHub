import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { COMMON_INITIAL_STATE } from '../InitialState/commonInitialState';

const commonSlice = createSlice({
    name: 'common',
    initialState: COMMON_INITIAL_STATE,
    reducers: {
        setIsOPenSidebar: (state, action: PayloadAction<boolean>) => {
            state.isOPenSidebar = action.payload;
        },
    },
});

export const { setIsOPenSidebar } = commonSlice.actions;

export const commonReducers = commonSlice.reducer;
