import {memo} from 'react';
import {Table} from '@mantine/core';

import styles from './styles.module.css';

interface Props {
    details: {
        number: string;
        at: string;
        countDevices: number;
        totalCost: number;
    }[];
}

export const DetailsOrders = memo(function DetailsOrders(props: Props) {
    const {details} = props;

    return (
        <div className={styles.conatiner}>
            <Table>
                <Table.Tbody className={styles.text}>
                    {details.map((detail) => (
                        <Table.Tr key={detail.number}>
                            <Table.Td p={0}>
                                № {detail.number} от {detail.at}
                            </Table.Td>
                            <Table.Td>{detail.countDevices} товар</Table.Td>
                            <Table.Td>
                                {detail.totalCost} {`\u20bd`}
                            </Table.Td>
                        </Table.Tr>
                    ))}
                </Table.Tbody>
            </Table>
        </div>
    );
});
