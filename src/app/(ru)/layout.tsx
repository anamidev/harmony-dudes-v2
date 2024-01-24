import type { Metadata } from 'next';
import '../globals.css';
import Header_ru from '@/components/Header_ru';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
    metadataBase: new URL('https://harmonydudes.com'),
    title: 'Harmony Dudes',
    description:
        'Мастер-классы, стримы и консультации от профессионалов анимационной индустрии',
    twitter: {
        images: [
            'https://media.discordapp.net/attachments/1053094319583662161/1144730825506684959/harmony_dudes_og.png?width=1299&height=667',
        ],
        card: 'summary_large_image',
        title: 'Harmony Dudes',
        description:
            'Мастер-классы, стримы и консультации от профессионалов анимационной индустрии',
    },
    openGraph: {
        images: [
            {
                url: 'https://media.discordapp.net/attachments/1053094319583662161/1144730825506684959/harmony_dudes_og.png?width=1299&height=667',
                width: 1299,
                height: 667,
            },
        ],
        title: 'Harmony Dudes',
        description:
            'Мастер-классы, стримы и консультации от профессионалов анимационной индустрии',
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
