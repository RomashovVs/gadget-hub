'use client';
import {memo} from 'react';

import {DetailsOrders} from '@/components';

const orders = {
    details: [
        {number: '567800', at: '28.04.2024', countDevices: 1, totalCost: 6990},
        {number: '436789', at: '1.03.2024', countDevices: 4, totalCost: 54378},
        {number: '405674', at: '12.02.2024', countDevices: 2, totalCost: 1300},
    ],
};

// `app/order/history/page.tsx` is the UI for the `/order/history` URL
const HistoryPage = memo(function HistoryPage() {
    return <DetailsOrders details={orders.details} />;
});

export default HistoryPage;
