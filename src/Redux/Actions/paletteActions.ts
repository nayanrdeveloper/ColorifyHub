import apiCall from '@/services/axiosServices';
import { AppDispatch } from '../store';
import {
    appendPalettes,
    setPalettes,
    setLoading,
} from '../Reducers/paletteSlice';

export const fetchPalettes =
    (page: number = 1, limit: number = 10) =>
    async (dispatch: AppDispatch) => {
        dispatch(setLoading(true));
        const res = await apiCall(
            'get',
            `palettes?page=${page}&limit=${limit}`,
            {},
        );
        if (res.status == 200) {
            if (page <= 1) {
                dispatch(setPalettes(res.data.data.palettes));
            } else {
                dispatch(appendPalettes(res.data.data.palettes));
            }
        }
        dispatch(setLoading(false));
    };
