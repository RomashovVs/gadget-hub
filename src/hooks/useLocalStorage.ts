'use client';

import {useLocalStorage as useLocalStorageMantine} from '@mantine/hooks';

export const useLocalStorage = <T>(key: string, defaultValue?: T) =>
    useLocalStorageMantine<T>({key, defaultValue, getInitialValueInEffect: false});
