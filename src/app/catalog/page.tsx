'use client';

import {memo, useCallback, useMemo, useState} from 'react';
import {Chip, Flex, Group, Pagination} from '@mantine/core';
import {useQuery} from '@tanstack/react-query';

import {CatalogSidebar, GoodsList} from '@/components';
import {useSortGoods} from '@/hooks/useSortGoods';
import {getGood} from '@/lib/api/goods';
import {Sort} from '@/types/sort';

import styles from './styles.module.css';

const DEFAULT_SORT: Sort = 'new';
const countPerPage = 6;
const DEFAULT_PAGE = 1;

const CatalogLayout = memo(function CatalogLayout() {
    const {data: _goods} = useQuery({
        queryKey: ['goods'],
        queryFn: () => getGood(),
    });

    const [sort, setSort] = useState<Sort>(DEFAULT_SORT);
    const [page, setPage] = useState(DEFAULT_PAGE);

    const goods = useSortGoods(_goods, sort);

    const pageGoods = useMemo(
        () => goods?.slice(0 + countPerPage * (page - 1), countPerPage * page),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [JSON.stringify(goods), page],
    );
    const totalPages = useMemo(() => Math.ceil((goods?.length ?? 1) / countPerPage), [goods?.length]);

    const handleChangeSort = useCallback((value: string) => {
        setSort(value as Sort);
        setPage(DEFAULT_PAGE);
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
                siblings={1}
                boundaries={1}
            />
        </div>
    );
});

export default CatalogLayout;
