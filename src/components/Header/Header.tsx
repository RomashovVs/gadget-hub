import {ButtonHTMLAttributes, memo} from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';
import {Button} from '@/ui/Button';

export const Header = memo(function Header() {
    return (
        <div>
            <span>Gadget</span>
            <span>Hub</span>
            <Button>Каталог</Button>
            <Button>Войти</Button>
        </div>
    );
});
