'use client';

import {memo, useMemo} from 'react';
import Image from 'next/image';
import {useQuery} from '@tanstack/react-query';

import {Advantages, CarouselGoods, Contacts} from '@/components';
import {getGood} from '@/lib/api/goods';

import styles from './page.module.css';

const Home = memo(function Home() {
    const {data: goods} = useQuery({
        queryKey: ['goods'],
        queryFn: () => getGood(),
    });

    const hitGoods = useMemo(() => goods?.filter((good) => good.hit_label), [goods]);
    const newsGoods = useMemo(() => goods?.filter((good) => good.new_label), [goods]);

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Image className={styles.logo} src="banner.svg" alt="Banner for Sale" width={0} height={0} priority />
                <CarouselGoods
                    title="Хиты продаж"
                    description="Тысячи покупателей уже одобрили эти товары. Самые популярные, проверенные и надежные гаджеты!"
                    icon={
                        <Image src="/Subtract.svg" alt="Subtract" width={32} height={32} className={styles.subtract} />
                    }
                    goods={hitGoods}
                />
                <CarouselGoods
                    title="Новинки"
                    description="Их только произвели - они уже у нас! Все самое новое и свежее на рынке электроники"
                    icon={
                        <Image
                            src="/Star_sparkles_icon.svg"
                            alt="Star_sparkles_icon"
                            width={32}
                            height={32}
                            className={styles.stars}
                        />
                    }
                    goods={newsGoods}
                />
                <Advantages />
                <Contacts />
            </main>
        </div>
    );
});

export default Home;
