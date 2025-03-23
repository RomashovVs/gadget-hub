'use client';

import {memo} from 'react';
import dynamic from 'next/dynamic';

import {EmptyOrder, Order, OrderForm} from '@/components';
import {useLocalStorage} from '@/hooks';
import {Good} from '@/types/goods';

const OrderBacket = memo(function OrderBacketLayout() {
    const [order] = useLocalStorage<(Good & {select?: boolean; count: number})[]>('order');

    if (!order?.length) {
        return <EmptyOrder />;
    }

    return (
        <>
            <Order />
            <OrderForm />
        </>
    );
});

// TODO Убрать dynamic, подумать как это можно сделать без использования Zustand и dynamic
const OrderBacketLayout = dynamic(() => Promise.resolve(OrderBacket), {ssr: false});

export default OrderBacketLayout;
