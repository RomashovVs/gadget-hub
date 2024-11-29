import {memo, MouseEvent, useCallback} from 'react';
import {Flex, Modal} from '@mantine/core';
import {IconX} from '@tabler/icons-react';

import {Good} from '@/types/goods';
import {Button} from '@/ui';

import styles from './styles.module.css';

interface Props {
    good: Pick<Good, 'id' | 'name'>;
    opened: boolean;
    onClose: () => void;
}

export const GoodDeleteModal = memo(function GoodDeleteModal(props: Props) {
    const {opened, onClose, good} = props;

    const handleDelete = useCallback(
        (event: MouseEvent) => {
            // eslint-disable-next-line no-console
            console.log('удаляем');

            onClose();

            event.stopPropagation();
        },
        [onClose],
    );

    return (
        <Modal.Root opened={opened} onClose={onClose} size="30%">
            <Modal.Overlay />
            <Modal.Content className={styles.content}>
                <Modal.Header className={styles.header} pb={0}>
                    <Modal.CloseButton className={styles.close} icon={<IconX size={20} />} />
                </Modal.Header>
                <Modal.Body className={styles.body}>
                    <Flex direction="column" align="end">
                        <div className={styles.description}>Вы действительно хотите удалить {good.name}?</div>
                        <Flex direction="row" mt="1rem">
                            <Button className={styles.deletButton} onClick={onClose} variant="subtle">
                                Отмена
                            </Button>
                            <Button className={styles.button} onClick={handleDelete} mr="1.5rem">
                                Да, удалить
                            </Button>
                        </Flex>
                    </Flex>
                </Modal.Body>
            </Modal.Content>
        </Modal.Root>
    );
});
