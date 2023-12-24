'use client';

import { useState } from 'react';

export default function EmailToClipboard({ email }: { email: string }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setIsOpen(true);
        setTimeout(() => setIsOpen(false), 1500);
    };

    return (
        <button
            onClick={copyToClipboard}
            className="link relative"
        >
            <div
                className={`pointer-events-none absolute -top-10 left-[calc(50%-43px)] rounded-lg bg-[#ca8a04]/[1] px-4 py-2 text-[#eeeeee] transition hover:text-[#eeeeee] ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                }`}
            >
                Copied!
            </div>
            {email}
        </button>
    );
}
