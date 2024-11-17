import {memo} from 'react';
import {Table} from '@mantine/core';

import styles from './styles.module.css';

interface Props {
    count: number;
    totalPrice: number;
}

export const SummaryOrder = memo(function SummaryOrder(props: Props) {
    const {count, totalPrice} = props;

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
