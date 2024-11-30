'use client';
import {FormEvent, memo, useCallback, useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Alert, PasswordInput, TextInput} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useSessionStorage} from '@mantine/hooks';

import {authenticationUser} from '@/lib/api/user';
import {Button} from '@/ui';

import styles from './styles.module.css';

// TODO
// Исправить компонент, разобраться с useEffect. В теории его быть тут не должно,
// мы должны в sessionStorage записывать в каком-то хуке - useAuthenticate(),
// в котором и про ошибку аутентификации будем знать и про успешность выполнения.
// Прочитать про cookei и session в Next, возможно стоит использовать такой подход.

export const Login = memo(function Login() {
    const form = useForm({
        mode: 'uncontrolled',
        clearInputErrorOnChange: false,
        initialValues: {
            login: '',
            password: '',
        },
    });
    const [_, setSessionAuth] = useSessionStorage({key: 'auth', defaultValue: false});

    const [errorAuth, setErrorAuth] = useState('');
    const [auth, setAuth] = useState<boolean | undefined>(undefined);

    const router = useRouter();

    const loginSubmit = useCallback(
        (e: FormEvent) => {
            void (async () => {
                const isAuthUser = await authenticationUser(form.getValues());
                setAuth(isAuthUser);
            })();

            e.preventDefault();
        },
        [form, setAuth],
    );

    useEffect(() => {
        if (auth) {
            setErrorAuth('');
            setSessionAuth(true);
            router.push('/');

            return;
        }

        if (auth === false) {
            setErrorAuth('Ошибка аутентификации');

            return;
        }

        setErrorAuth('');
    }, [auth, router, setSessionAuth]);

    return (
        <div className={styles.page}>
            <h1 className={styles.welcome}>Добро пожаловать!</h1>
            <div className={styles.formContainer}>
                <form onSubmit={loginSubmit} className={styles.form}>
                    <TextInput withAsterisk label="Логин" key={form.key('login')} {...form.getInputProps('login')} />

                    <PasswordInput
                        withAsterisk
                        label="Пароль"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    />

                    <Button type="submit" className={styles.button}>
                        Войти
                    </Button>

                    {errorAuth ? <Alert color="red">{errorAuth}</Alert> : null}
                </form>
            </div>
        </div>
    );
});
