'use client';

import { fetchPalettes } from '@/Redux/Actions/paletteActions';
import { setPage } from '@/Redux/Reducers/paletteSlice';
import { useAppDispatch, useAppSelector } from '@/Redux/store';
import React, { useEffect } from 'react';
import Loader from '../common/Loader';
import PallateCard from './PallateCard';

export default function Palettes() {
    const { palettes, page, loading } = useAppSelector(state => state.palette);
    const dispatch = useAppDispatch();

    const loadMorehandle = async () => {
        await dispatch(setPage(page + 1));
    };

    useEffect(() => {
        dispatch(fetchPalettes(page));
    }, [dispatch, page]);
    return (
        <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {palettes.map(palette => (
                    <PallateCard
                        key={palette._id}
                        _id={palette._id}
                        color1={palette.color1}
                        color2={palette.color2}
                        color3={palette.color3}
                        color4={palette.color4}
                    />
                ))}
            </div>
            {loading && <Loader />}
            <div className="flex flex-col items-center">
                {palettes.length > 1 && (
                    <button
                        onClick={loadMorehandle}
                        className="bg-blue-400 text-white px-5 py-3 rounded-lg"
                    >
                        Load More Palette
                    </button>
                )}
            </div>
        </div>
    );
}
