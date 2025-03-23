// eslint-disable-next-line simple-import-sort/imports
import type {Metadata} from 'next';
import {ReactNode} from 'react';

// !!Important
import './globals.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import {ColorSchemeScript, MantineProvider} from '@mantine/core';

import {Footer, Header} from '@/components';

import '../ui/theme';
import {Provider} from './Provider';

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
    title: 'Gadget Hub',
    description: 'Project SPbPU',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>

            <body>
                <Provider>
                    <MantineProvider classNamesPrefix="m">
                        <Header />
                        {children}
                        <Footer />
                    </MantineProvider>
                </Provider>
            </body>
        </html>
    );
}
