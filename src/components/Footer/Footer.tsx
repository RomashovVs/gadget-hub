import {memo} from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

export const Footer = memo(function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.text}>Gadget Hub</div>
            <div className={styles.description}>Магазин надежных гаджетов</div>

            <div className={styles.licence}>© 2024 ООО “Гаджет Хаб”. Все права защищены</div>

            <Image src="/phoneIcon.svg" alt="PhoneIcon" width={32} height={32} className={styles.phoneIcon} />
            <div className={styles.phone}>8 (800) 678-34-24</div>

            <Image src="/VK.svg" alt="VKLogo" width={32} height={32} className={styles.vkLogo} />
            <Image src="/TelegramLogo.svg" alt="TelegramLogo" width={32} height={32} className={styles.telegramLogo} />
            <Image src="/WhatsApp.svg" alt="WhatsApp" width={32} height={32} className={styles.whatsAppLogo} />
        </footer>
    );
});
