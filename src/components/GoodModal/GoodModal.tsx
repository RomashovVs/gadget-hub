import {memo, MouseEvent, useCallback} from 'react';
import {Flex, Modal} from '@mantine/core';
import {IconShoppingCart, IconX} from '@tabler/icons-react';

import {Good} from '@/types/goods';
import {Button} from '@/ui';

import {ProductInfo} from '../ProductInfo';
import styles from './styles.module.css';

interface Props {
    good: Good;
    opened: boolean;
    onClose: () => void;
}

export const GoodModal = memo(function GoodModal(props: Props) {
    const {opened, onClose, good} = props;

    // Перенести в другой компонент <ByuButtons goodId={good.id}/>
    const handleBuy = useCallback((event: MouseEvent) => {
        // eslint-disable-next-line no-console
        console.log('покупаем');

        event.stopPropagation();
    }, []);

    return (
        <Modal.Root opened={opened} onClose={onClose} centered size="65.4%">
            <Modal.Overlay />
            <Modal.Content className={styles.content}>
                <Modal.Header className={styles.header}>
                    <Modal.CloseButton className={styles.close} icon={<IconX size={20} />} />
                </Modal.Header>
                <Modal.Body className={styles.body}>
                    <Flex direction="column" align="end">
                        <ProductInfo good={good} />
                        <Button
                            className={styles.button}
                            leftSection={<IconShoppingCart size={16} />}
                            onClick={handleBuy}
                        >
                            В корзину
                        </Button>
                    </Flex>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
});
