import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
// import FondoAnimado from '../components/FondoAnimado/fondoAnimado'
import VideoFondo from '../components/VideoFondo/videoFondo'

import Hora from '../components/Peticiones/Hora/hora'

export default function Home() {
  const [proyectos, setProyectos] = useState(false)
  
  // * ---------------------------------------------------
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio v5</title>
        <meta name="description" content="Portafolio de Francisco Angel Romero Tepal" />
        <link rel="icon" href="/corazon.ico" />
      </Head>
      {/* <FondoAnimado></FondoAnimado> */}
      <VideoFondo></VideoFondo>
      {/* //?------------------------------------------ */}
      <main className={styles.main}>
        {/* ------------------------------------- */}
        <section className={styles.titulo}>
          {/* <h4>Romer-Dev.com</h4> */}
        </section>
        {/* ------------------------------------- */}
        <div className={styles.hora}>
          <div className={styles.horacontain}><Hora></Hora></div>
          <h4 onClick={() => setProyectos(!proyectos)}>PROYECTOS</h4>
        </div>
        {/* ------------------------------------- */}
        {proyectos ?
          <section className={styles.projects}>
            <Link href={"/portfolio"} >
              <div className={styles.portfolio}>
                <p>visita mi  </p>
                <h2>Portafolio</h2>
              </div>
            </Link>
            <Link href={"/portfolio"} >
              <div className={styles.portfolio}>
                <p>visita mi  </p>
                <h2>Proyecto de Finanzas</h2>
              </div>
            </Link>

          </section>
          : ""}
      </main>

      {/* //?------------------------------------------ */}
      <footer className={styles.footer}>

        <Link href={"/portfolio"}>
          <h4>Creado por </h4>
          <h3>FranckRomer</h3>
          <Image
            src="/corazon.ico"
            alt="Logo"
            width={30}
            height={30}
          />
        </Link>

      </footer>
    </div>
  )
}



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