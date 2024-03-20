'use client';
import { fetchGradients } from '@/Redux/Actions/gradientsaction';
import { useAppDispatch, useAppSelector } from '@/Redux/store';
import React, { useEffect } from 'react';
import Loader from '../common/Loader';
import { setPage } from '@/Redux/Reducers/gradientsSlice';
import GradientCard from './GradientCard';

export default function Gradients() {
    const { loading, gradients, page } = useAppSelector(
        state => state.gradients,
    );

    const dispatch = useAppDispatch();

    const loadMorehandle = async () => {
        console.log('loadMorehandle are called');
        await dispatch(setPage(page + 1));
    };

    useEffect(() => {
        console.log('fetchGradients are called!');
        dispatch(fetchGradients(page));
    }, [dispatch, page]);
    return (
        <div>
            <div className="grid grid-cols-4 gap-11 p-6">
                {gradients.map(gradient => (
                    <GradientCard
                        key={gradient._id}
                        gradientColor={gradient.gradientColor}
                    />
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
