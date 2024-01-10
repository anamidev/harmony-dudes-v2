'use client';

import Image from 'next/image';
import hdLogo from '@/assets/svg/logo/Harmony_Dudes_full_light.svg';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Language from './Language';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* desktop */}
            <header className="sticky top-0 z-10 flex hidden border-b border-b-emerald-900 bg-header bg-[length:4px_4px] px-4 py-2 backdrop-blur-sm backdrop-saturate-50 md:flex">
                {/* Logo */}
                <Link href={'/ru'}>
                    <div className="relative h-16 w-32">
                        <Image
                            src={hdLogo}
                            alt="Harmony Dudes домашняя страница"
                            fill
                            className="object-contain"
                        />
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="flex h-16 grow">
                    <ul className="flex w-full items-center justify-center gap-12">
                        <li>
                            <Link
                                href={'/ru'}
                                className="link text-lg"
                            >
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/mentorship'}
                                className="link text-lg"
                            >
                                Менторство
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/workshops'}
                                className="link text-lg"
                            >
                                Мастер классы
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Language />
            </header>

            {/* mobile */}
            <header
                className={`sticky top-0 z-20 flex flex-col justify-between border-b border-b-emerald-900 px-4 py-2 md:hidden ${
                    isOpen
                        ? 'bg-[#0C392D]'
                        : 'bg-header bg-[length:4px_4px] backdrop-blur-sm backdrop-saturate-50'
                }`}
            >
                <div className="flex justify-between">
                    {/* Logo */}
                    <Link href={'/ru'}>
                        <div className="relative h-16 w-32">
                            <Image
                                src={hdLogo}
                                alt="Harmony Dudes домашняя страница"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>

                    <button
                        className="group"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        {isOpen ? <FiX className="h-10 w-10" /> : <FiMenu className="h-10 w-10" />}
                    </button>
                </div>

                <nav>
                    <ul
                        className={`flex-col items-center justify-center gap-3 p-6 ${
                            isOpen ? 'flex' : 'hidden'
                        }`}
                    >
                        <Language />
                        <li>
                            <Link
                                href={'/ru'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/mentorship'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Менторство
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/ru/workshops'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Мастер классы
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
