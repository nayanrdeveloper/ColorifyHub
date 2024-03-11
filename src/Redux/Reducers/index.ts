import { combineReducers } from '@reduxjs/toolkit';
import { commonReducers } from './commonSlice';
import { paletteReducers } from './paletteSlice';

const rootReducers = combineReducers({
    common: commonReducers,
    palette: paletteReducers,
});

export default rootReducers;
