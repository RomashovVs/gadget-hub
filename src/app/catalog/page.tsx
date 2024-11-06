'use client';

import {memo, ReactNode, useCallback, useState} from 'react';
import {Chip, Group} from '@mantine/core';

import {Sort} from '@/types/sort';

import styles from './styles.module.css';

const DEFAULT_SORT: Sort = 'new';

interface Props {
    children: ReactNode;
}

const CatalogLayout = memo(function CatalogLayout(props: Props) {
    const {children} = props;
    const [sort, onSort] = useState<Sort>(DEFAULT_SORT);

    const handleChangeSort = useCallback((value: string) => {
        // eslint-disable-next-line no-console
        console.log(value);
        onSort(value as Sort);
    }, []);

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>Каталог товаров</h2>

            {/* <CatalogChips /> */}
            <Chip.Group onChange={handleChangeSort} value={sort} multiple={false}>
                <Group className={styles.chips} gap="sm">
                    <Chip value="new">Новые</Chip>
                    <Chip value="popular">Популярные</Chip>
                    <Chip value="cheaper">Подешевле</Chip>
                    <Chip value="costly">Подороже</Chip>
                </Group>
            </Chip.Group>

            {children}
            {/* <CatalogSidebar /> */}
        </div>
    );
});

export default CatalogLayout;
