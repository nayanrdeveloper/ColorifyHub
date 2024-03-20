import { combineReducers } from '@reduxjs/toolkit';
import { commonReducers } from './commonSlice';
import { paletteReducers } from './paletteSlice';
import { gradientsReducers } from './gradientsSlice';

const rootReducers = combineReducers({
    common: commonReducers,
    palette: paletteReducers,
    gradients: gradientsReducers,
});

export default rootReducers;
