import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1> Estamos en la Home</h1>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </main>
    </div>
  )
}
