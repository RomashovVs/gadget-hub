'use client';

import {memo, useCallback} from 'react';
import {Checkbox, Table} from '@mantine/core';
import {useListState} from '@mantine/hooks';

import {useLocalStorage} from '@/hooks';
import {Good} from '@/types/goods';

import {OrderRow} from './OrderRow';
import {SummaryOrder} from './SummaryOrder';
import styles from './styles.module.css';

export const Order = memo(function Order() {
    const [order, setOrder] = useLocalStorage<(Good & {select?: boolean; count: number})[]>('order');

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

    const [values, handlers] = useListState(order?.map((good) => good.select));

    const allChecked = values.every(Boolean);
    const allCheckHandlers = useCallback(() => {
        handlers.setState((current) => current.map(() => !allChecked));

        setOrder([...order.map((good) => ({...good, select: !allChecked}))]);
    }, [allChecked, handlers, order, setOrder]);

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
                    {order?.map((good, index) => (
                        <OrderRow
                            key={good.id}
                            good={good}
                            checked={values[index]}
                            // TODO Перенести внутрь компонента, вынести и добавить useCallback. Для скорости пока - так.
                            onChangeChecked={(event) => {
                                handlers.setItem(index, event.currentTarget.checked);
                                const newOrder = [...order];
                                newOrder[index].select = event.currentTarget.checked;
                                setOrder(newOrder);
                            }}
                        />
                    ))}

                    <SummaryOrder count={count} totalPrice={totalPrice} />
                </Table.Tbody>
            </Table>
        </div>
    );
});
