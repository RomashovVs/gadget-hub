'use client';

import {memo, ReactNode} from 'react';
import {Carousel} from '@mantine/carousel';
import {IconChevronLeft, IconChevronRight} from '@tabler/icons-react';

import {Good} from '@/types/goods';

import {ProductCard} from '../ProductCard';
import styles from './styles.module.css';

interface Props {
    title: string;
    description: string;
    icon: ReactNode;
    goods: Good[] | undefined;
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

            <Carousel
                align="start"
                height="max-content"
                draggable
                dragFree
                nextControlIcon={<IconChevronRight color="#115EFB" width={24} height={24} />}
                previousControlIcon={<IconChevronLeft color="#115EFB" width={24} height={24} />}
                styles={{
                    root: {width: '75%'},
                    controls: {padding: 0},
                    control: {boxShadow: 'none', margin: '0 var(--carousel-controls-offset)'},
                    container: {
                        margin: '0 0.5rem',
                        marginBottom: '1.5rem',
                    },
                }}
                slideSize="33.3%"
                controlsOffset="-1.5rem"
            >
                {goods?.map((good) => (
                    <Carousel.Slide key={good.id}>
                        <ProductCard good={good} />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    );
});
