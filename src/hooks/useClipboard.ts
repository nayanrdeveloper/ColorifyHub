import { getRandomColorStatus } from '@/utils/copyEmojiHelper';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useClipboard = () => {
    const [copied, setCopied] = useState<boolean>(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                setCopied(true);
                toast.success(`${getRandomColorStatus()}`, {
                    position: 'top-center',
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                    icon: false,
                    closeButton: false,
                });
            })
            .catch(error => {
                console.error('Failed to copy:', error);
                toast.error('Failed to copy to clipboard', {
                    position: 'bottom-right',
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            });
    };

    return { copied, copyToClipboard };
};

export default useClipboard;
