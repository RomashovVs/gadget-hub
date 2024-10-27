'use client';
import {memo} from 'react';

import {EmptyOrder} from '@/components';

import styles from './styles.module.css';

// `app/order/page.tsx` is the UI for the `/order` URL
const OrderBacketLayout = memo(function OrderBacketLayout() {
    return (
        <>
            <EmptyOrder />
        </>
    );
});

export default OrderBacketLayout;
