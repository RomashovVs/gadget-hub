import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {AntdRegistry} from '@ant-design/nextjs-registry';

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
            <body>
                <AntdRegistry>{children}</AntdRegistry>
            </body>
        </html>
    );
}
