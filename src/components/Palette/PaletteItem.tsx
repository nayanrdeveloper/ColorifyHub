import useClipboard from '@/hooks/useClipboard';
import { getRandomEmoji } from '@/utils/copyEmojiHelper';
import React from 'react';

interface IPaletteItemComponent {
    color: string;
}

export default function PaletteItem({ color }: IPaletteItemComponent) {
    const { copyToClipboard } = useClipboard();
    const handleCopy = () => {
        copyToClipboard(color);
    };
    return (
        <div
            className="palette-item flex items-center justify-center group hover:shadow-palatte"
            style={{ backgroundColor: color }}
            onClick={handleCopy}
        >
            <span className="text-white font-semibold invisible group-hover:visible">
                Copy {getRandomEmoji()}
            </span>
        </div>
    );
}
