import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToTop from '@/components/ToTop';

export const metadata: Metadata = {
    title: 'Harmony Dudes v2',
    description: 'Harmony Dudes v2',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main className="min-h-[calc(100vh-209px)]">{children}</main>
                <Footer />
                <ToTop />
            </body>
        </html>
    );
}
