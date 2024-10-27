'use client';
import {memo, ReactNode, useMemo} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import {Tabs} from '@mantine/core';

import styles from './styles.module.css';

interface Props {
    children: ReactNode;
}

// `app/order/` is the UI for the `/order` URL
const OrderBacketLayout = memo(function OrderBacketLayout(props: Props) {
    const {children} = props;

    const router = useRouter();
    const pathname = usePathname();

    const path = useMemo(() => {
        const [, , activePath] = pathname.split('/');

        return `/${activePath || ''}`;
    }, [pathname]);

    return (
        <div className={styles.page}>
            <Tabs value={path} onChange={(value) => router.replace(`/order${value}`)} className={styles.tabs}>
                <Tabs.List>
                    <Tabs.Tab value="/">Корзина</Tabs.Tab>
                    <Tabs.Tab value="/history">История заказов</Tabs.Tab>
                </Tabs.List>
            </Tabs>

            {children}
        </div>
    );
});

export default OrderBacketLayout;
