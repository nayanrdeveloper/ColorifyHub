import { combineReducers } from '@reduxjs/toolkit';
import { commonReducers } from './commonSlice';

const rootReducers = combineReducers({
    common: commonReducers,
});

export default rootReducers;
