import {memo} from 'react';
import {Button} from '@/ui';

import styles from './styles.module.css';
import {IconCategoryFilled, IconShoppingCartCog, IconUserFilled} from '@tabler/icons-react';

export const Header = memo(function Header() {
    return (
        <div className={styles.header}>
            <h2 className={styles.gadget}>Gadget</h2>
            <h2 className={styles.hub}>Hub</h2>

            <div className={styles.buttonSection}>
                <a href="/">
                    <Button className={styles.button} leftSection={<IconCategoryFilled size={16} />}>
                        Каталог
                    </Button>
                </a>

                <a href="/order">
                    <Button leftSection={<IconShoppingCartCog size={16} />} className={styles.button}>
                        Корзина
                    </Button>
                </a>

                <a href="/login">
                    <Button leftSection={<IconUserFilled size={16} />} className={styles.button}>
                        Войти
                    </Button>
                </a>
            </div>
        </div>
    );
});
