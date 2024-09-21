import {memo} from 'react';
import {Button} from '@/ui/Button';

import styles from './styles.module.css';
import {IconCategoryFilled, IconUserFilled} from '@tabler/icons-react';

export const Header = memo(function Header() {
    return (
        <div>
            <span>Gadget</span>
            <span>Hub</span>
            <Button className={styles.button} leftSection={<IconCategoryFilled size={16} />}>
                Каталог
            </Button>
            <Button leftSection={<IconUserFilled size={16} />} className={styles.button}>
                Войти
            </Button>
        </div>
    );
});
