import {memo, ReactNode} from 'react';

import styles from './styles.module.css';

interface Props {
    title: string;
    description: string;
    icon: ReactNode;
    goods: {id: string; name: string; img_src: string; hit_label: boolean; new_label: boolean};
}

export const CouruselGoods = memo(function CouruselGoods(props: Props) {
    const {title, description, icon, goods} = props;

    // eslint-disable-next-line no-console
    console.log(title, description, icon, goods);

    return <div className={styles.container}></div>;
});
