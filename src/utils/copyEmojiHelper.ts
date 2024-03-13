import {
    colorCopyEmojiList,
    colorCopySentences,
} from '@/constants/commonConstant';

export const getRandomEmoji = (): string => {
    const randomIndex = Math.floor(Math.random() * colorCopyEmojiList.length);
    return colorCopyEmojiList[randomIndex];
};

export const getRandomColorStatus = (): string => {
    const randomIndex = Math.floor(Math.random() * colorCopyEmojiList.length);
    const emoji = getRandomEmoji();
    console.log(`${colorCopySentences[randomIndex]} ${emoji}`);
    return `${emoji} ${colorCopySentences[randomIndex]}`;
};
