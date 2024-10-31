import {memo, ReactNode} from 'react';

import {Good} from '@/types/goods';

import {ProductCard} from '../ProductCard';
import styles from './styles.module.css';

interface Props {
    title: string;
    description: string;
    icon: ReactNode;
    goods: Good[];
}

export const CarouselGoods = memo(function CarouselGoods(props: Props) {
    const {title, description, icon, goods} = props;

    return (
        <div className={styles.container}>
            <div className={styles.descriptionSection}>
                {icon}
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
            </div>
            <ProductCard good={goods[0]} />
        </div>
    );
});
