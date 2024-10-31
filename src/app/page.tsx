import Image from 'next/image';

import {Advantages, CarouselGoods, Contacts} from '@/components';

import styles from './page.module.css';

export default function Home() {
    return (
        <>
            <div className={styles.page}>
                <main className={styles.main}>
                    <Image
                        className={styles.logo}
                        src="banner.svg"
                        alt="Banner for Sale"
                        width={0}
                        height={0}
                        priority
                    />
                    <CarouselGoods
                        title="Хиты продаж"
                        description="Тысячи покупателей уже одобрили эти товары. Самые популярные, проверенные и надежные гаджеты!"
                        icon={
                            <Image
                                src="/Subtract.svg"
                                alt="Subtract"
                                width={32}
                                height={32}
                                className={styles.subtract}
                            />
                        }
                        goods={[
                            {
                                id: '8',
                                name: 'Смартфон 256 ГБ белый',
                                img_src: '/images/smartphone_white.svg',
                                new_label: true,
                                hit_label: true,
                                labels: [],
                                price: '1000',
                                rating: '4.8',
                            },
                        ]}
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
                        goods={[
                            {
                                id: '8',
                                name: 'Смартфон 256 ГБ белый',
                                img_src: '/images/smartphone_white.svg',
                                new_label: true,
                                labels: [],
                                price: '1000',
                                rating: '5.0',
                            },
                        ]}
                    />
                    <Advantages />
                    <Contacts />
                </main>
            </div>
        </>
    );
}
