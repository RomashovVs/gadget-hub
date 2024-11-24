'use client';

import {memo, useCallback} from 'react';
import {useSessionStorage} from '@mantine/hooks';
import {IconUserFilled} from '@tabler/icons-react';

import {Button} from '@/ui';

import styles from './styles.module.css';

export const LoginButton = memo(function LoginButton() {
    // TODO Переместить в хук useIsAuthenticate();
    const [isAuth, setAuth] = useSessionStorage({key: 'auth', defaultValue: false});

    const logOut = useCallback(() => {
        setAuth(false);
    }, [setAuth]);

    if (isAuth) {
        return (
            <Button leftSection={<IconUserFilled size={16} />} className={styles.button} onClick={logOut}>
                Выйти
            </Button>
        );
    }

    return (
        <a href="/login">
            <Button leftSection={<IconUserFilled size={16} />} className={styles.button}>
                Войти
            </Button>
        </a>
    );
});
