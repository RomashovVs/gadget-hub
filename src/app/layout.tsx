import type {Metadata} from 'next';
// import localFont from 'next/font/local';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';

import {Footer, Header} from '@/components';

import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

export const metadata: Metadata = {
    title: 'Gadget Hub',
    description: 'Project SPbPU',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>

            <body>
                <MantineProvider>
                    <Header />
                    {children}
                    <Footer />
                </MantineProvider>
            </body>
        </html>
    );
}
