'use client';

import {memo, MouseEvent, useCallback} from 'react';
import {Flex} from '@mantine/core';
import {IconShoppingCart} from '@tabler/icons-react';

import {useLocalStorage} from '@/hooks';
import {Good} from '@/types/goods';
import {Button} from '@/ui';

import styles from './styles.module.css';

interface Props {
    good: Good;
}

export const BuyButtons = memo(function BuyButtons(props: Props) {
    // UseCurrentGood -> используем контекст: прикольнее имеет больше шансов на жизнь и кнопка не будет знать о пропсах
    const {good} = props;

    // TODO Использовать массив id продуктов, для правильной очередности добавления в корзину
    // И сделать вместо oreder -> Record<string; (Good & {select?: boolean; count: number})>, для более легкого изменения числа и добавления нового продукта
    const [order, setOrder] = useLocalStorage<(Good & {select?: boolean; count: number})[]>('order');

    const handleBuy = useCallback(
        (event: MouseEvent) => {
            event.stopPropagation();

            const newOrder = [...(order ?? [])];

            newOrder.push({...good, count: 1});

            setOrder(newOrder);
        },
        [good, order, setOrder],
    );

    const handleIncrement = useCallback(
        (event: MouseEvent) => {
            event.stopPropagation();

            const newOrder = [...(order ?? [])];

            const index = newOrder.findIndex(({id}) => id === good.id);

            // TODO убрать, решить конфликты, никогда не отработает
            if (index === -1) {
                return;
            }

            newOrder[index].count = newOrder[index].count + 1;

            setOrder(newOrder);
        },
        [good.id, order, setOrder],
    );

    const handleDecrement = useCallback(
        (event: MouseEvent) => {
            event.stopPropagation();

            const newOrder = [...(order ?? [])];

            const index = newOrder.findIndex(({id}) => id === good.id);

            // TODO убрать, решить конфликты, никогда не отработает
            if (index === -1) {
                return;
            }

            newOrder[index].count = newOrder[index].count - 1;

            setOrder(newOrder);
        },
        [good.id, order, setOrder],
    );

    const existInOrder = order?.find(({id}) => id === good.id);
    const count = existInOrder?.count;

    if (existInOrder) {
        return (
            <Flex gap="md">
                <Button disabled={count === 1} onClick={handleDecrement} className={styles.control}>
                    -
                </Button>
                <div className={styles.count}>{count}</div>
                <Button className={styles.control} onClick={handleIncrement}>
                    +
                </Button>
            </Flex>
        );
    }

    return (
        <Button className={styles.button} leftSection={<IconShoppingCart size={16} />} onClick={handleBuy}>
            В корзину
        </Button>
    );
});
