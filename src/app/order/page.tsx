'use client';
import {memo} from 'react';
import {useLocalStorage} from '@mantine/hooks';

import {EmptyOrder, Order, OrderForm} from '@/components';

// `app/order/page.tsx` is the UI for the `/order` URL
const OrderBacketLayout = memo(function OrderBacketLayout() {
    // вынести в отдельный хук
    const [isEmpty] = useLocalStorage({key: 'isEmptyOrder', defaultValue: false});

    return (
        <>
            {isEmpty && <EmptyOrder />}
            <Order />
            <OrderForm />
        </>
    );
});

export default OrderBacketLayout;
