'use client';

import {memo} from 'react';

// import styles from './styles.module.css';

interface Props {
    params: {
        sort: string;
    };
}

// `app/catalog/page.tsx` is the UI for the `/catalog` URL
const ProducstListPage = memo(function ProducstListPage(props: Props) {
    const {params} = props;

    return <div>Тут отображаем с фильтрацией - по {params.sort}</div>;
});

export default ProducstListPage;
