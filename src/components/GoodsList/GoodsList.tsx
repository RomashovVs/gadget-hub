import {memo} from 'react';
import {Flex} from '@mantine/core';

import {Good} from '@/types/goods';

import {ProductCard} from '../ProductCard';

interface Props {
    goods: Good[] | null | undefined;
}

export const GoodsList = memo(function GoodsList(props: Props) {
    const {goods} = props;

    // TODO Add Alert
    // eslint-disable-next-line capitalized-comments
    // if (!goods?.length) {
    // eslint-disable-next-line capitalized-comments
    //     return (
    //         <Flex wrap="wrap" w="100%">
    //             <Alert h="10%" color="red">
    //                 Товары не найдены
    //             </Alert>
    //         </Flex>
    //     );
    // }

    return (
        <Flex wrap="wrap" w="100%">
            {goods?.map((good) => <ProductCard good={good} key={good.id} showHandler />)}
        </Flex>
    );
});
