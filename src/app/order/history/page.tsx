'use client';

import {memo} from 'react';
import {useQuery} from '@tanstack/react-query';

import {DetailsOrders} from '@/components';
import {getOrderDetails} from '@/lib/api/order';

// `app/order/history/page.tsx` is the UI for the `/order/history` URL
const HistoryPage = memo(function HistoryPage() {
    const {data: orderDetails} = useQuery({
        queryKey: ['getOrderDetails'],
        queryFn: () => getOrderDetails(),
    });

    return <DetailsOrders details={orderDetails} />;
});

export default HistoryPage;
