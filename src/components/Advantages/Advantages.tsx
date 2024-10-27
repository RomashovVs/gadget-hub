import {memo} from 'react';
import {Flex} from '@mantine/core';

import {AdvanatgesCard} from './AdvantagesCard';
import styles from './styles.module.css';

export const Advantages = memo(function Advantages() {
    return (
        <>
            <h1 className={styles.header}>Преимущества</h1>

            <Flex direction="row" justify="space-between" gap="3rem" flex={1} wrap="wrap">
                <AdvanatgesCard
                    title="Утром заказали, вечером получили"
                    iconPath="rocketIcon.svg"
                    width={72}
                    height={72}
                />

                <AdvanatgesCard
                    title="С товаром что-то не так? Вернем деньги"
                    iconPath="revertRub.svg"
                    width={72}
                    height={72}
                />

                <AdvanatgesCard title="Только оригинальные товары" iconPath="licenseIcon.svg" width={72} height={72} />
            </Flex>
        </>
    );
});
