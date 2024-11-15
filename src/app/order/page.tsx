'use client';
import {memo} from 'react';
import {useLocalStorage} from '@mantine/hooks';

import {EmptyOrder, Order} from '@/components';

// `app/order/page.tsx` is the UI for the `/order` URL
const OrderBacketLayout = memo(function OrderBacketLayout() {
    const [isEmpty] = useLocalStorage({key: 'isEmptyOrder', defaultValue: false});

    return (
        <>
            {isEmpty && <EmptyOrder />}
            <Order />
        </>
    );
});

export default OrderBacketLayout;
