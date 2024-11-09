import {memo} from 'react';
import {Flex} from '@mantine/core';

import {Good} from '@/types/goods';

import {ProductCard} from '../ProductCard';
// import styles from './styles.module.css';

interface Props {
    goods: Good[] | undefined;
}

export const GoodsList = memo(function GoodsList(props: Props) {
    const {goods} = props;

    return (
        <Flex wrap="wrap" w="100%">
            {goods?.map((good) => <ProductCard good={good} key={good.id} showHandler />)}
        </Flex>
    );
});
