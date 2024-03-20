'use client';
import useClipboard from '@/hooks/useClipboard';
import React from 'react';

export default function GradientCard({
    gradientColor,
}: {
    gradientColor: string;
}) {
    const { copyToClipboard } = useClipboard();

    const copyGradientHandler = () => {
        copyToClipboard(gradientColor);
    };
    return (
        <div className='bg-white shadow-palatte p-6 flex justify-center items-center rounded-md'>
            <div
                className="w-52 h-52 rounded-md cursor-pointer flex justify-center items-center group"
                style={{ backgroundImage: gradientColor }}
                onClick={copyGradientHandler}
            >
                <span className="text-white invisible group-hover:visible">
                    Copy
                </span>
            </div>
        </div>
    );
}
