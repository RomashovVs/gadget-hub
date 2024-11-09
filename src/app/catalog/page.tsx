'use client';

import {memo, useCallback, useState} from 'react';
import {Chip, Flex, Group} from '@mantine/core';

import {GoodsList} from '@/components';
import goods from '@/data/goods.json';
import {Sort} from '@/types/sort';

import styles from './styles.module.css';

const DEFAULT_SORT: Sort = 'new';

const CatalogLayout = memo(function CatalogLayout() {
    const [sort, onSort] = useState<Sort>(DEFAULT_SORT);

    const handleChangeSort = useCallback((value: string) => {
        onSort(value as Sort);
    }, []);

    const pageGoods = goods.slice(0, 9);

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

            <Flex direction="row">
                <GoodsList goods={pageGoods} />
                {/* <CatalogSidebar /> */}
            </Flex>
        </div>
    );
});

export default CatalogLayout;
