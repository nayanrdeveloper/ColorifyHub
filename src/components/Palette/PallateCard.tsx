import { IPaletteItem } from '@/Interface/paletteInterface';
import { getRandomEmoji } from '@/utils/copyEmojiHelper';
import React from 'react';
import PaletteItem from './PaletteItem';

export default function PallateCard(palette: IPaletteItem) {
    const { color1, color2, color3, color4 } = palette;
    return (
        <div key={palette._id} className="flex flex-col">
            <PaletteItem color={color1} />
            <PaletteItem color={color2} />
            <PaletteItem color={color3} />
            <PaletteItem color={color4} />
        </div>
    );
}
