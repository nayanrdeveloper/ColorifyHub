'use client';
import { fetchGradients } from '@/Redux/Actions/gradientsaction';
import { useAppDispatch, useAppSelector } from '@/Redux/store';
import React, { useEffect } from 'react';
import Loader from '../common/Loader';
import { setPage } from '@/Redux/Reducers/paletteSlice';

export default function Gradients() {
    const { loading, gradients, page } = useAppSelector(
        state => state.gradients,
    );

    const dispatch = useAppDispatch();

    const loadMorehandle = async () => {
        await dispatch(setPage(page + 1));
    };

    useEffect(() => {
        console.log('');
        dispatch(fetchGradients(page));
    }, [dispatch, page]);
    return (
        <div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-4 p-6">
                {gradients.map(gradient => (
                    <div key={gradient._id}>
                        <div
                            className="w-52 h-52 rounded-md"
                            style={{ backgroundImage: gradient.gradientColor }}
                        ></div>
                    </div>
                ))}
            </div>
            {loading && <Loader />}
            <div className="flex flex-col items-center">
                {gradients.length > 1 && (
                    <button
                        onClick={loadMorehandle}
                        className="bg-blue-400 text-white px-5 py-3 rounded-lg"
                    >
                        Load More Gradeitns
                    </button>
                )}
            </div>
        </div>
    );
}
