import {memo} from 'react';
import Image from 'next/image';
import {Flex} from '@mantine/core';
import {IconStarFilled} from '@tabler/icons-react';

import {Good} from '@/types/goods';

import styles from './styles.module.css';

interface Props {
    good: Good;
}

export const ProductInfo = memo(function ProductInfo(props: Props) {
    const {good} = props;

    const description =
        'Смартфон фиолетовый — девайс со складным корпусом и двумя экранами, что расширяет его возможности.';

    return (
        <Flex direction="row" className={styles.cardContainer} w="100%" gap="1rem">
            <div className={styles.imageContainer}>
                <Image src={good.img_src} alt={good.name} width={100} height={100} className={styles.goodImage} />
            </div>

            <Flex direction="column" justify="space-between">
                <div>
                    <div className={styles.name}>{good.name}</div>
                    <div className={styles.rating} data-testid="rating-container">
                        <IconStarFilled size={20} className={styles.star} data-testid="star-icon" />
                        <span className={styles.ratingText}>{good.rating}</span>
                    </div>
                </div>

                <div>
                    <div className={styles.description}>{description}</div>
                </div>

                <div className={styles.price}>{good.price} ₽</div>
            </Flex>
        </Flex>
    );
});
