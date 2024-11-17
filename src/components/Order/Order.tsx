'use client';

import {memo, useCallback} from 'react';
import {Checkbox, Table} from '@mantine/core';
import {useListState, useLocalStorage} from '@mantine/hooks';

import goods from '@/data/goods.json';
import {Good} from '@/types/goods';

import {OrderRow} from './OrderRow';
import {SummaryOrder} from './SummaryOrder';
import styles from './styles.module.css';

export const Order = memo(function Order() {
    const [order, setOrder] = useLocalStorage<(Good & {select?: boolean})[]>({
        key: 'order',
        defaultValue: [goods[0], goods[1]],
    });

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

    const [values, handlers] = useListState(order.map((good) => good.select));

    const allChecked = values.every(Boolean);
    const allCheckHandlers = useCallback(() => {
        handlers.setState((current) => current.map(() => !allChecked));

        setOrder((prevOrder) => prevOrder.map((good) => ({...good, select: !allChecked})));
    }, [allChecked, handlers, setOrder]);

    return (
        <div className={styles.conatiner}>
            <Checkbox
                className={styles.allCheckbox}
                checked={allChecked}
                description="Выбрать все"
                onChange={allCheckHandlers}
            />

            <Table verticalSpacing="2rem">
                <Table.Tbody className={styles.text}>
                    {order.map((good, index) => (
                        <OrderRow
                            key={good.id}
                            good={good}
                            checked={values[index]}
                            onChangeChecked={(event) => handlers.setItem(index, event.currentTarget.checked)}
                        />
                    ))}

                    <SummaryOrder count={count} totalPrice={totalPrice} />
                </Table.Tbody>
            </Table>
        </div>
    );
});
