import Image from 'next/image';
import styles from './page.module.css';
import {Advantages, Contacts, Footer, Header} from '@/components';

export default function Home() {
    return (
        <>
            <div className={styles.page}>
                <main className={styles.main}>
                    <Image
                        className={styles.logo}
                        src="banner.svg"
                        alt="Banner for Sale"
                        width={0}
                        height={0}
                        priority
                    />
                    <Advantages />
                    <Contacts />
                </main>
            </div>
        </>
    );
}
