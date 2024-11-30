'use client';

import {memo, useCallback} from 'react';
import {useRouter} from 'next/navigation';
import {useSessionStorage} from '@mantine/hooks';
import {IconUserFilled} from '@tabler/icons-react';

import {Button} from '@/ui';

import styles from './styles.module.css';

export const LoginButton = memo(function LoginButton() {
    // TODO Переместить в хук useIsAuthenticate();
    const [isAuth, setAuth] = useSessionStorage({key: 'auth', defaultValue: false});
    const router = useRouter();

    const logOut = useCallback(() => {
        setAuth(false);
        router.push('/');
    }, [router, setAuth]);

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
