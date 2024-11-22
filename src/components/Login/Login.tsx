'use client';
import {FormEvent, memo, useCallback} from 'react';
import {PasswordInput, TextInput} from '@mantine/core';
import {useForm} from '@mantine/form';

import {addUser} from '@/lib/api/user';
import {Button} from '@/ui';

import styles from './styles.module.css';

export const Login = memo(function Login() {
    const form = useForm({
        mode: 'uncontrolled',
        clearInputErrorOnChange: false,
        initialValues: {
            login: '',
            password: '',
        },
    });

    // eslint-disable-next-line no-console
    const loginSubmit = useCallback(
        (e: FormEvent) => {
            void (async () => {
                await addUser(form.getValues());
            })();

            e.preventDefault();
        },
        [form],
    );

    return (
        <div className={styles.page}>
            <h1 className={styles.welcome}>Добро пожаловать!</h1>
            <div className={styles.formContainer}>
                <form onSubmit={loginSubmit} className={styles.form}>
                    <TextInput
                        // disabled
                        withAsterisk
                        label="Логин"
                        key={form.key('login')}
                        {...form.getInputProps('login')}
                    />

                    <PasswordInput
                        // disabled
                        withAsterisk
                        label="Пароль"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    />

                    <Button type="submit" className={styles.button}>
                        Войти
                    </Button>
                </form>
            </div>
        </div>
    );
});
