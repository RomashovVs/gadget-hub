import {memo} from 'react';
import {Flex, Modal} from '@mantine/core';
import {IconX} from '@tabler/icons-react';

import {Good} from '@/types/goods';

import {BuyButtons} from '../BuyButtons';
import {ProductInfo} from '../ProductInfo';
import styles from './styles.module.css';

interface Props {
    good: Good;
    opened: boolean;
    onClose: () => void;
}

export const GoodModal = memo(function GoodModal(props: Props) {
    const {opened, onClose, good} = props;

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
                        <BuyButtons good={good} />
                    </Flex>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
});
