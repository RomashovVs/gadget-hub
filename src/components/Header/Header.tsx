import {memo} from 'react';
import {IconCategoryFilled, IconShoppingCartCog} from '@tabler/icons-react';

import {Button} from '@/ui';

import {AuthGuard} from '../AuthGuard';
import {LoginButton} from './LoginButton';
import styles from './styles.module.css';

export const Header = memo(function Header() {
    return (
        <div className={styles.header}>
            <h2 className={styles.gadget}>Gadget</h2>
            <h2 className={styles.hub}>Hub</h2>

            <div className={styles.buttonSection}>
                <AuthGuard>
                    <a href="/catalog">
                        <Button className={styles.button} leftSection={<IconCategoryFilled size={16} />}>
                            Каталог
                        </Button>
                    </a>
                </AuthGuard>

                <AuthGuard>
                    <a href="/order">
                        <Button leftSection={<IconShoppingCartCog size={16} />} className={styles.button}>
                            Корзина
                        </Button>
                    </a>
                </AuthGuard>

                <LoginButton />
            </div>
        </div>
    );
});
