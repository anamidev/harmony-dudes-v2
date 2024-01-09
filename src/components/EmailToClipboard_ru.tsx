'use client';

import { ReactNode, useState } from 'react';

export default function EmailToClipboard({
    email,
    classStyle = '',
    children,
}: {
    email: string;
    classStyle?: string;
    children?: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setIsOpen(true);
        setTimeout(() => setIsOpen(false), 1500);
    };

    return (
        <button
            onClick={copyToClipboard}
            className={'relative ' + classStyle}
        >
            <div
                className={`pointer-events-none absolute -top-12 left-[calc(50%-74px)] rounded-lg bg-[#ac46b6]/[1] px-4 py-2 text-[#eeeeee] transition hover:text-[#eeeeee] ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                }`}
            >
                Скопировано!
            </div>
            {children ?? email}
        </button>
    );
}
