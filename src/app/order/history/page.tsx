'use client';
import {memo} from 'react';

import styles from './styles.module.css';

// `app/order/history/page.tsx` is the UI for the `/order/history` URL
const HistoryPage = memo(function HistoryPage() {
    return (
        <div>
            <h1>История заказов</h1>
        </div>
    );
});

export default HistoryPage;
