import Palettes from '@/components/Palette/Palettes';
import SubHeader from '@/components/common/SubHeader';
import { SectionHeaderConstant } from '@/constants/SectionHeaderConstants';
import Image from 'next/image';

export default function Home() {
    return (
        <section className="px-5 py-5">
            <SubHeader
                header={SectionHeaderConstant.palette.header}
                subHeader={SectionHeaderConstant.palette.subHeader}
            />
            <Palettes />
        </section>
    );
}
