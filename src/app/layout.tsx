import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import '@mantine/core/styles.css';

import {ColorSchemeScript, MantineProvider} from '@mantine/core';

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
                <MantineProvider>{children}</MantineProvider>
            </body>
        </html>
    );
}
