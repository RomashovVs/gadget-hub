import {memo} from 'react';
import Image from 'next/image';

import {Login} from '@/components';

import styles from './styles.module.css';

// `app/login/page.tsx` is the UI for the `/login` URL
const LoginPage = memo(function LoginPage() {
    return (
        <div className={styles.page}>
            <Image src="bgLogin.svg" alt="bacgroundLogo" width={0} height={0} className={styles.background} priority />

            <Login />
        </div>
    );
});

export default LoginPage;
