import Image from 'next/image';
import hdLogo from '@/assets/svg/logo/Harmony_Dudes_full_light.svg';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-10 flex border-b border-b-emerald-900 bg-header bg-[length:4px_4px] px-4 py-2 backdrop-blur-sm backdrop-saturate-50">
            {/* Logo */}
            <Link href={'/'}>
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
            <nav className="flex h-16 grow pr-32">
                <ul className="flex w-full items-center justify-center gap-12">
                    <li>
                        <Link href={'/'}>About</Link>
                    </li>
                    <li>
                        <Link href={'/mentorship'}>Mentorship</Link>
                    </li>
                    <li>
                        <Link href={'/workshops'}>Workshops</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
