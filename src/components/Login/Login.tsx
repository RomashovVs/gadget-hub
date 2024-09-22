'use client';
import {memo} from 'react';

import styles from './styles.module.css';
import {Form, useForm} from '@mantine/form';
import {PasswordInput, TextInput} from '@mantine/core';
import {Button} from '@/ui';

export const Login = memo(function Login() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            login: '',
            password: '',
        },
    });

    return (
        <div className={styles.page}>
            <h1 className={styles.welcome}>Добро пожаловать!</h1>
            <div className={styles.formContainer}>
                <form onSubmit={() => console.log(form.values)} className={styles.form}>
                    <TextInput
                        disabled
                        withAsterisk
                        label="Логин"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />

                    <PasswordInput
                        disabled
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
