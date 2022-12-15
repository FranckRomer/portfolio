import React from 'react'
import styles from './HomeCom.module.css'
import Image from 'next/image'
import Link from 'next/link'

const HomeComponent = () => {
    return (
        <div className={styles.Home}>

            {/* //? WELCOME ------------------------------------------- */}
            <div className={styles.welcome_contain} id="welcome">
                <section className={styles.welcome} >
                    <div className={styles.info_contain}>
                        <div className={styles.nombre_contain}>
                            <h3>Bienvenido, mi nombre es : </h3>
                            <h3 className={styles.nombre}>Francisco</h3>
                        </div>

                        <h1>Full-Stack-Developer</h1>
                    </div>
                    <div className={styles.img_welcome}>
                        <Link href={"https://www.linkedin.com/in/francisco-angel-romero-tepal-a942b5202/"}>
                            <Image
                                src="/fondos/fondo_defalt.jpg"
                                alt="linkedin"
                                width={300}
                                height={300}
                            />
                        </Link>
                    </div>


                </section>
                <a className={styles.next} href="#about">
                    <Image
                        src="/icons/flecha.png"
                        alt="linkedin"
                        width={30}
                        height={30}
                    />
                </a>
            </div>

            {/* //? ------------------------------------------- */}
            <div className={styles.linea} ></div>
            {/* //? ------------------------------------------- */}
            <div className={styles.about_contain} id="about">
                <a className={styles.next} href="#welcome">
                    <Image
                        src="/icons/flechaA.png"
                        alt="linkedin"
                        width={30}
                        height={30}
                    />
                </a>

                <section className={styles.About}>
                    <div className={styles.img_about}></div>
                    <div className={styles.info_about}>
                        <h2>Acerca de mi</h2>
                        <div className={styles.linea}></div>
                        <div className={styles.parrafo}>
                            <p>Desarrollador Full-Stack con conocientos en <b>Fronted</b>, <b>Backend</b> y <b>IoT</b>. Desarrollo aplicaciones web, sitios estaticos, herramientas para el usarios y dispositivos de IoT.</p>
                        </div>
                    </div>
                </section>

                <a className={styles.next} href="#skills">
                    <Image
                        src="/icons/flecha.png"
                        alt="linkedin"
                        width={30}
                        height={30}
                    />
                </a>
            </div>
            {/* ------------------------------------------- */}
            {/* <hr /> */}
            <div className={styles.linea}></div>
            <div className={styles.skills_contain} id="skills">
                <a className={styles.next} href="#about">
                    <Image
                        src="/icons/flechaA.png"
                        alt="linkedin"
                        width={30}
                        height={30}
                    />
                </a>

                <div className={styles.skills}>
                    <h1>Skills</h1>
                    <hr />
                    <div className={styles.fronted}>
                        <h2>Fronted</h2>
                        <div className={styles.skills_img}>
                            <div>
                                <Image src="/skills/html.png" alt="Html" width={50} height={50} />
                                <p className={styles.skill_info}>Html</p>
                            </div>
                            <Image src="/skills/css.png" alt="Css" width={50} height={50} />
                            <Image src="/skills/js.png" alt="JavaScript" width={50} height={50} />
                            <Image src="/skills/react.png" alt="React" width={50} height={50} />
                            <Image src="/skills/nextjs.png" alt="Next-js" width={50} height={50} className={styles.invertir} />
                        </div>
                    </div>
                    <div className={styles.backend}>
                        <h2>Backend</h2>
                        <div className={styles.skills_img}>
                            <Image src="/skills/js.png" alt="JavaScript" width={50} height={50} />
                            <Image src="/skills/nodejs.png" alt="Node-js" width={50} height={50} />
                            <Image src="/skills/npm.png" alt="Npm" width={60} height={30} />
                            <Image src="/skills/nest.png" alt="Nest-js" width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.iots}>
                        <h2>Iot</h2>
                        <div className={styles.skills_img}>
                            <Image src="/skills/arduino.png" alt="Arduino" width={50} height={50} />
                            <Image src="/skills/raspberry.png" alt="Raspberry" width={45} height={50} />
                            <Image src="/skills/http.png" alt="Http" width={50} height={50} />
                        </div>
                    </div>
                    <div className={styles.otros}>
                        <h2>Otras Skills</h2>
                        <div className={styles.skills_img}>
                            <Image src="/icons/github.png" alt="GitHub" width={50} height={50} />
                            <Image src="/skills/matlab.png" alt="Matlab" width={50} height={50} />
                            <Image src="/skills/python.png" alt="Python" width={50} height={50} />
                            <Image src="/skills/ubuntu.png" alt="Ubuntu" width={50} height={50} />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default HomeComponent