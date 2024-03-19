import apiCall from '@/services/axiosServices';
import {
    appendGradients,
    setGradients,
    setLoading,
} from '../Reducers/gradientsSlice';
import { AppDispatch } from '../store';

export const fetchGradients =
    (page: number = 1, limit: number = 10) =>
    async (dispatch: AppDispatch) => {
        dispatch(setLoading(true));
        const res = await apiCall(
            'get',
            `gradients?page=${page}&limit=${limit}`,
            {},
        );
        console.log(res);
        if (res.status == 200) {
            if (page <= 1) {
                dispatch(setGradients(res.data.gradeints));
            } else {
                dispatch(appendGradients(res.data.gradeints));
            }
        }
        dispatch(setLoading(false));
    };
