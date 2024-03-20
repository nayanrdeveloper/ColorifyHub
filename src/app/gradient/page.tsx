import Gradients from '@/components/Gradients/Gradients';
import SubHeader from '@/components/common/SubHeader';
import { SectionHeaderConstant } from '@/constants/SectionHeaderConstants';
import React from 'react';

export default function GradientPage() {
    return (
        <section className="px-1 py-5">
            <SubHeader
                header={SectionHeaderConstant.gradient.header}
                subHeader={SectionHeaderConstant.gradient.subHeader}
            />
            <Gradients />
        </section>
    );
}
