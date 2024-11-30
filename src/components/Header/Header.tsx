'use client';

import {memo, useMemo} from 'react';
import {Badge} from '@mantine/core';
import {IconCategoryFilled, IconShoppingCartCog} from '@tabler/icons-react';

import {useLocalStorage} from '@/hooks';
import {Good} from '@/types/goods';
import {Button} from '@/ui';

import {AuthGuard} from '../AuthGuard';
import {LoginButton} from './LoginButton';
import styles from './styles.module.css';

// TODO В константы перенести route
export const Header = memo(function Header() {
    const [order] = useLocalStorage<(Good & {select?: boolean; count: number})[]>('order');

    // TODO count* from useOrder
    const count = useMemo(() => order?.reduce((prevCount, {count}) => prevCount + count, 0), [order]);

    return (
        <div className={styles.header}>
            <a href="/" className={styles.mainLink}>
                <h2 className={styles.gadget}>Gadget</h2>
                <h2 className={styles.hub}>Hub</h2>
            </a>

            <div className={styles.buttonSection}>
                <AuthGuard>
                    <a href="/catalog">
                        <Button className={styles.button} leftSection={<IconCategoryFilled size={16} />}>
                            Каталог
                        </Button>
                    </a>
                </AuthGuard>

                <AuthGuard>
                    <a href="/order">
                        <Button
                            leftSection={<IconShoppingCartCog size={16} />}
                            className={styles.button}
                            rightSection={count > 0 ? <Badge className={styles.badge}>{count}</Badge> : null}
                        >
                            Корзина
                        </Button>
                    </a>
                </AuthGuard>

                <LoginButton />
            </div>
        </div>
    );
});
