import {memo} from 'react';
import Image from 'next/image';

import styles from './styles.module.css';
import {Flex} from '@mantine/core';

export const Contacts = memo(function Contacts() {
    return (
        <div>
            <h1 className={styles.workText}>Работаем 24/7</h1>

            {/* Phone */}
            <Flex direction="row" justify="space-between" mb="3rem" gap="5rem">
                <Flex direction="row" align="center" gap="1rem">
                    <Image src={'phoneIconBlack.svg'} alt={'PhoneIconBlack'} width={40} height={40} />
                    <div className={styles.phone}>8 (800) 678-34-24</div>
                </Flex>

                {/* email */}
                <Flex direction="row" align="center" gap="1rem">
                    <Image src={'iconEmail.svg'} alt={'EmailIconBlack'} width={40} height={40} />
                    <div className={styles.text}>gadget@hub.ru</div>
                </Flex>

                {/* adres */}
                <Flex direction="row" align="center" gap="1rem">
                    <Image src={'mapPinIcon.svg'} alt={'PhoneIconBlack'} width={40} height={40} />
                    <div className={styles.text}>Санкт-Петербург, ул. Барочная, д.7, корпус 2</div>
                </Flex>
            </Flex>
        </div>
    );
});
