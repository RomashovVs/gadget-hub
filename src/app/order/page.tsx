'use client';
import {memo} from 'react';

import styles from './styles.module.css';
import {EmptyOrder} from '@/components';

// `app/order/page.tsx` is the UI for the `/order` URL
const OrderBacketLayout = memo(function OrderBacketLayout() {
    return (
        <>
            <EmptyOrder />
        </>
    );
});

export default OrderBacketLayout;
