import {memo, useCallback} from 'react';
import {Flex, Modal} from '@mantine/core';
import {IconX} from '@tabler/icons-react';

import {useLocalStorage} from '@/hooks';
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

    // TODO Добавить хук useOrder, который будет возвращать основные методы работы с заказом: удаление, добавление и т.д.
    const [order, setOrder] = useLocalStorage<(Good & {select?: boolean; count: number})[]>('order');

    const handleDelete = useCallback(() => {
        setOrder([...order].filter(({id}) => id !== good.id));
        onClose();
    }, [good.id, onClose, order, setOrder]);

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
