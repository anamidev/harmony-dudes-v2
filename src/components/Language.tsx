'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function Language() {
    const router = useRouter();
    const pathName = usePathname();

    const handleLanguage = (btnLang: 'ru' | 'en') => {
        if (btnLang === 'en') {
            if (!pathName.includes('/en')) {
                router.push('/en' + pathName);
            }
        }
        if (btnLang === 'ru') {
            if (pathName.includes('/en')) {
                router.push(pathName.slice(3) ? pathName.slice(3) : '/');
            }
        }
    };

    return (
        <div className="flex gap-2 self-end md:flex md:w-32 md:items-center md:justify-end md:gap-2 md:self-center">
            <button
                className="link"
                onClick={() => handleLanguage('ru')}
            >
                RU
            </button>
            <span>|</span>
            <button
                className="link"
                onClick={() => handleLanguage('en')}
            >
                EN
            </button>
        </div>
    );
}
