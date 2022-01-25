import Head from 'next/head'
import { YMetrika } from '@/components/YMetrika'
import styles from '../styles/Home.module.css'

export default function Home() {
    const metrika = process.env.NEXT_PUBLIC_YANDEX_METRIKA

    return (
        <div className={styles.container}>
            <Head>
                <title>sekta.dev</title>
                <link rel="icon" href="/favicon.ico" />

                {!metrika ? null : (
                    <YMetrika
                        number={metrika}
                        mode={'script'}
                    />
                )}
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    sekta.dev
                </h1>
            </main>
        </div>
    )
}
