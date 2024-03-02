import type { Metadata } from 'next';
import './globals.css';
import Header_ru from '@/components/Header_ru';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
    title: 'Harmony Dudes',
    description:
        'Harmony Dudes - консультации, менторство, мастерклассы и стримы от профессионалов анимационной индустрии',
    metadataBase: new URL('https://harmonydudes.com'),
    twitter: {
        images: ['https://i.ibb.co/5RRqvSC/harmony-dudes-og.png'],
        card: 'summary_large_image',
        title: 'Harmony Dudes',
        site: 'https://harmonydudes.com',
        description:
            'Harmony Dudes - консультации, менторство, мастерклассы и стримы от профессионалов анимационной индустрии',
    },
    openGraph: {
        images: [
            {
                url: 'https://i.ibb.co/5RRqvSC/harmony-dudes-og.png',
                width: 1299,
                height: 667,
            },
        ],
        title: 'Harmony Dudes',
        siteName: 'Harmony Dudes',
        description:
            'Harmony Dudes - консультации, менторство, мастерклассы и стримы от профессионалов анимационной индустрии',
        url: 'https://harmonydudes.com',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
            <body>
                <Header_ru />
                <main className="min-h-[calc(100vh-209px)]">{children}</main>
                <Footer />
                <ToTop />
            </body>
        </html>
    );
}
