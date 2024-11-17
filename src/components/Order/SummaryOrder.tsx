import {memo} from 'react';
import {Table} from '@mantine/core';
import {useLocalStorage} from '@mantine/hooks';

import {Good} from '@/types/goods';

import styles from './styles.module.css';

export const SummaryOrder = memo(function SummaryOrder() {
    // убрать в хук. Этому тут не место.
    const [order] = useLocalStorage<(Good & {select?: boolean})[] | undefined>({
        key: 'order',
    });

    // совместить в 1 хуке.
    const count = order?.reduce((prevCount, good) => {
        if (good.select) {
            return prevCount + 1;
        }

        return prevCount;
    }, 0);

    const totalPrice = order?.reduce((prevCount, good) => {
        if (good.select) {
            return prevCount + Number(good.price ?? 0);
        }

        return prevCount;
    }, 0);

    return (
        <Table.Tr className={styles.tr}>
            <Table.Td w="1rem" className={styles.tableCheckbox}></Table.Td>
            <Table.Td></Table.Td>
            <Table.Td></Table.Td>
            <Table.Td></Table.Td>
            <Table.Td colSpan={2}>
                <div className={styles.price}>
                    {count} товара на {totalPrice} ₽
                </div>
            </Table.Td>
        </Table.Tr>
    );
});
