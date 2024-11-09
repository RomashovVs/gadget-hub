import {memo} from 'react';
import Image from 'next/image';
import {IconStarFilled} from '@tabler/icons-react';

import {Good} from '@/types/goods';

import styles from './styles.module.css';

interface Props {
    good: Good;
}

export const ProductCard = memo(function ProductCard(props: Props) {
    const {good} = props;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.labels}>
                {good.new_label && <div className={styles.newLabel}>Новинка</div>}
                {good.hit_label && <div className={styles.hitLabel}>Хит</div>}
            </div>

            <div className={styles.imageContainer}>
                <Image src={good.img_src} alt={good.name} width={100} height={100} className={styles.goodImage} />
            </div>
            <div className={styles.price}>{good.price} ₽</div>
            <div className={styles.title}>
                <div className={styles.name}>{good.name}</div>
            </div>

            <div className={styles.rating}>
                <IconStarFilled size={20} className={styles.star} />
                <span className={styles.ratingText}>{good.rating}</span>
            </div>
        </div>
    );
});
