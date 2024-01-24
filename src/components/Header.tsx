'use client';

import Image from 'next/image';
import hdLogo from '@/assets/svg/logo/Harmony_Dudes_full_light.svg';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Language from './Language';
import RunningText from './RunningText';
import { ECategory } from '@/lib/data/courses';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openCourses] = useState<{ name: string; category: ECategory }[]>([
        { name: 'Animation Foundations', category: ECategory.animation },
    ]);

    return (
        <>
            {/* desktop */}
            <header className="sticky top-0 z-10 hidden overflow-hidden border-b border-b-emerald-900 bg-header bg-[length:4px_4px] px-4 py-2 backdrop-blur-sm backdrop-saturate-50 md:block">
                <div className="flex w-full">
                    {/* Logo */}
                    <Link href={'/en'}>
                        <div className="relative h-16 w-32">
                            <Image
                                src={hdLogo}
                                alt="Harmony Dudes home page"
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
                                    href={'/en'}
                                    className="link text-lg"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/en/mentorship'}
                                    className="link text-lg"
                                >
                                    Mentorship
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={'/en/workshops'}
                                    className="link text-lg"
                                >
                                    Workshops
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <Language />
                </div>

                <RunningText
                    openCourses={openCourses}
                    isAnimated={true}
                />
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
                    <Link href={'/en'}>
                        <div className="relative h-16 w-32">
                            <Image
                                src={hdLogo}
                                alt="Harmony Dudes home page"
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
                                href={'/en'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/en/mentorship'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Mentorship
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/en/workshops'}
                                className="link text-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Workshops
                            </Link>
                        </li>
                        <li className="w-full">
                            <RunningText openCourses={openCourses} />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
