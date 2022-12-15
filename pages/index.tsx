import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio v5</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3>Welcom to </h3>
        <h1>Romer-Dev.com</h1>

        {/* <div className={styles.grid}>

          <div className={styles.card}>
            <h2>Idiom</h2>
            <div className={styles.grid}>
              <div className={styles.card}>Eng</div>
              <div className={styles.card}>Spa</div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Theme</h2>
            <div className={styles.grid}>
              <div className={styles.card}>White</div>
              <div className={styles.card}>Black</div>
            </div>
          </div>

        </div> */}

        <p>visit my </p>
        <Link href={"/portfolio"}>
          <h2>Portfolio</h2>
          {/* <div className={styles.card}>
          </div> */}
        </Link>
      </main>

      <footer className={styles.footer}>
        <h4>Creado por </h4>
        <h3>FranckRomer</h3>
      </footer>
    </div>
  )
}