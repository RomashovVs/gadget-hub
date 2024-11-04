'use client';

import {memo, ReactNode} from 'react';
import {usePathname} from 'next/navigation';
import {Tabs} from '@mantine/core';

import styles from './styles.module.css';

interface Props {
    children: ReactNode;
}

const CatalogLayout = memo(function CatalogLayout(props: Props) {
    const {children} = props;

    const pathname = usePathname();

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>Каталог товаров</h2>

            <Tabs value={pathname} className={styles.tabs}>
                <Tabs.List>
                    <a href="/catalog/new">
                        <Tabs.Tab value="/catalog/new">Новые</Tabs.Tab>
                    </a>
                    <a href="/catalog/popular">
                        <Tabs.Tab value="/catalog/popular">Популярные</Tabs.Tab>
                    </a>
                    <a href="/catalog/cheaper">
                        <Tabs.Tab value="/catalog/cheaper">Подешевле</Tabs.Tab>
                    </a>
                    <a href="/catalog/costly">
                        <Tabs.Tab value="/catalog/costly">Подороже</Tabs.Tab>
                    </a>
                </Tabs.List>
            </Tabs>

            {children}
        </div>
    );
});

export default CatalogLayout;
