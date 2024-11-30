import {ChangeEventHandler, memo} from 'react';
import Image from 'next/image';
import {Checkbox, Table} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconX} from '@tabler/icons-react';

import {Good} from '@/types/goods';
import {Button} from '@/ui';

import {BuyButtons} from '../BuyButtons';
import {GoodDeleteModal} from '../GoodDeleteModal';
import styles from './styles.module.css';

interface Props {
    checked?: unknown;
    onChangeChecked?: ChangeEventHandler<HTMLInputElement> | undefined;
    good: Good & {select?: boolean};
}

export const OrderRow = memo(function OrderRow(props: Props) {
    const {good, checked, onChangeChecked} = props;
    const [opened, {close, open}] = useDisclosure(false);

    return (
        <Table.Tr className={styles.tr}>
            <Table.Td w="1rem" className={styles.tableCheckbox}>
                <Checkbox checked={Boolean(checked)} onChange={onChangeChecked} />
            </Table.Td>
            <Table.Td>
                <div className={styles.imageContainer}>
                    <Image src={good.img_src} alt={good.name} width={100} height={100} className={styles.goodImage} />
                </div>
            </Table.Td>
            <Table.Td>
                <div className={styles.name}>{good.name}</div>
            </Table.Td>
            <Table.Td>
                <BuyButtons good={good} />
            </Table.Td>
            <Table.Td>
                <div className={styles.price}>{good.price} ₽</div>
            </Table.Td>

            <Table.Td>
                <Button
                    className={styles.deletButton}
                    variant="subtle"
                    leftSection={<IconX size={12} />}
                    size="xs"
                    onClick={open}
                >
                    Удалить
                </Button>

                <GoodDeleteModal good={good} opened={opened} onClose={close} />
            </Table.Td>
        </Table.Tr>
    );
});
