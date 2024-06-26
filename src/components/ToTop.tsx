'use client';

import { useEffect, useState } from 'react';

export default function ToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const onScroll = () => {
        if (window.scrollY < 230) {
            setIsVisible(false);
        } else if (window.scrollY >= 230) {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <button
            className={`fixed bottom-5 right-5 transition md:bottom-20 md:right-20 ${
                isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            onClick={toTop}
        >
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 rounded-full bg-white/[0.3] text-[#0C392D] transition hover:bg-white/[0.6]"
            >
                <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
            </svg>
        </button>
    );
}
