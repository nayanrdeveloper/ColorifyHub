import { IPaletteItem } from '@/Interface/paletteInterface';
import React from 'react';

export default function PallateCard(palette: IPaletteItem) {
    const { color1, color2, color3, color4 } = palette;
    return (
        <div key={palette._id} className="flex flex-col">
            <div
                className="palette-item"
                style={{ backgroundColor: color1 }}
            ></div>
            <div
                className="palette-item"
                style={{ backgroundColor: color2 }}
            ></div>
            <div
                className="palette-item"
                style={{ backgroundColor: color3 }}
            ></div>
            <div
                className="palette-item"
                style={{ backgroundColor: color4 }}
            ></div>
        </div>
    );
}
