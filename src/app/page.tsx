import Image from 'next/image';
import styles from './page.module.css';
import {Button} from '@/ui/Button';
import {Header} from '@/components';

export default function Home() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <Image
                    className={styles.logo}
                    src="https://nextjs.org/icons/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <ol>
                    <li>Save and see your changes instantly.</li>
                </ol>
            </main>
        </div>
    );
}
