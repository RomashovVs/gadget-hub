'use client';

import {memo, useCallback, useMemo, useState} from 'react';
import {Chip, Flex, Group, Pagination} from '@mantine/core';

import {CatalogSidebar, GoodsList} from '@/components';
import goods from '@/data/goods.json';
import {Sort} from '@/types/sort';

import styles from './styles.module.css';

const DEFAULT_SORT: Sort = 'new';
const countPerPage = 6;

const CatalogLayout = memo(function CatalogLayout() {
    const [sort, setSort] = useState<Sort>(DEFAULT_SORT);

    const [page, setPage] = useState(1);

    const handleChangeSort = useCallback((value: string) => {
        setSort(value as Sort);
    }, []);

    const pageGoods = useMemo(() => goods.slice(0 + countPerPage * (page - 1), countPerPage * page), [page]);
    const totalPages = useMemo(() => Math.ceil(goods.length / countPerPage), []);

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
                <CatalogSidebar />
            </Flex>

            <Pagination
                total={totalPages}
                value={page}
                onChange={setPage}
                mt="2rem"
                mb="3rem"
                className={styles.pagination}
            />
        </div>
    );
});

export default CatalogLayout;
