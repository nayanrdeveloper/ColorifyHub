import { ISubHeader } from '@/Interface/commonComponentinterface';
import React from 'react';

export default function SubHeader({ header, subHeader }: ISubHeader) {
    return (
        <div>
            <h4 className="text-sectionHeader font-bold text-3xl py-2">
                {header}
            </h4>
            <p className="text-sectionSubHeader">{subHeader}</p>
        </div>
    );
}
