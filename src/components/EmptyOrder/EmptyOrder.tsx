import {memo} from 'react';
import Image from 'next/image';
import {Flex} from '@mantine/core';
import {Button} from '@/ui';
import Link from 'next/link';

import styles from './styles.module.css';

export const EmptyOrder = memo(function EmptyOrder() {
    return (
        <Flex direction={'column'} className={styles.container}>
            <Image src={'/EmptyOrder.svg'} alt={'EmptyOrder'} width={100} height={130} />
            <h1>Пока пусто</h1>
            <div>Ознакомьтесь с новинками и хитами на главной или найдите нужное в каталоге</div>
            <Flex direction={'row'} gap={'lg'} align={'center'}>
                <a href="/">
                    <Button className={styles.button}>Перейти в каталог</Button>
                </a>
                <Link href="/" className={styles.link}>
                    Главная страница
                </Link>
            </Flex>
        </Flex>
    );
});
