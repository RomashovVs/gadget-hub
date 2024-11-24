'use client';

import {memo, ReactNode} from 'react';
import {useSessionStorage} from '@mantine/hooks';

interface Props {
    children: ReactNode;
}

export const AuthGuard = memo(function AuthGuard({children}: Props) {
    const [isAuth] = useSessionStorage({key: 'auth', defaultValue: false});

    if (!isAuth) {
        return null;
    }

    return children;
});
