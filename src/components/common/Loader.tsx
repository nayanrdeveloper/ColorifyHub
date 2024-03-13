import Image from 'next/image';
import React from 'react';

export default function Loader() {
    return (
        <div className="flex justify-center">
            <div>
                <Image
                    src={'/loader.svg'}
                    alt={'Loader'}
                    height={100}
                    width={100}
                />
            </div>
        </div>
    );
}
