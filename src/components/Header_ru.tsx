'use client';

import Image from 'next/image';
import hdLogo from '@/assets/svg/logo/Harmony_Dudes_full_light.svg';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Language from './Language';
import { ECategory_ru } from '@/lib/data/courses';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openCourses] = useState<{ name: string; category: ECategory_ru | ECategory_ru }[]>([
        { name: 'Основы Анимации', category: ECategory_ru.animation },
    ]);

    return (
        <>
            {/* desktop */}
            <header className="sticky top-0 z-10 hidden overflow-hidden border-b border-b-emerald-900 bg-header bg-[length:4px_4px] px-4 py-2 backdrop-blur-sm backdrop-saturate-50 md:block">
                <div className="flex w-full">
                    {/* Logo */}
                    <Link href={'/'}>
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
                    <nav className="flex h-16 grow mr-32">
                        <ul className="flex w-full items-center justify-center gap-12">
                            <li>
                                <Link
                                    href={'/'}
                                    className="link text-lg"
                                >
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/mentorship'}
                                    className="link text-lg"
                                >
                                    Менторство
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/workshops'}
                                    className="link text-lg"
                                >
                                    Мастер классы
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* <Language /> */}
                </div>

                {/* <RunningText_ru
                    openCourses={openCourses}
                    isAnimated={true}
                /> */}
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
                    <Link href={'/'}>
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
                        {/* <Language /> */}
                        <li>
                            <Link
                                href={'/'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/mentorship'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Менторство
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/workshops'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Мастер классы
                            </Link>
                        </li>
                        {/* <li className="w-full">
                            <RunningText_ru openCourses={openCourses} />
                        </li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
}
