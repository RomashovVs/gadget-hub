import {memo} from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

interface Props {
    title: string;
    iconPath: string;
    width: number | `${number}` | undefined;
    height: number | `${number}` | undefined;
}

export const AdvanatgesCard = memo(function AdvanatgesCard(props: Props) {
    const {title, iconPath, height, width} = props;

    return (
        <div className={styles.card}>
            <Image src={iconPath} alt={iconPath} width={width} height={height} />
            <div className={styles.text}>{title}</div>
        </div>
    );
});
