import React from 'react'
import styles from './HomeCom.module.css'
import Image from 'next/image'
import Link from 'next/link'

const HomeComponent = (props: any) => {
    const pageReturn = (pageReturn: string) => {
        console.log(pageReturn);
        props.pageReturn(pageReturn)
    }
    return (
        <div className={styles.Home}>
            {/* <header className={styles.header}>
                <a href="#welcome">Inicio</a>
                <a href="#about">Acerca de mi</a>
                <a href="#skills">Habilidades</a>
                <a href="#carrer">Carrera</a>
            </header> */}
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
                    Hacerca de mi
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
                    Inicio
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
                    Habilidades
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
                    Hacerca de mi
                </a>

                <div className={styles.skills}>
                    <h1>Habilidades</h1>
                    <hr />
                    <div className={styles.fronted}>
                        <h2>Fronted</h2>
                        <p>Como desarrollador Frontend he realizado sitios usando solo <b>Html</b>, <b>Css</b> y <b>JavaScript</b>, sin embargo para crear <b>aplicaciones</b> por lo general uso herramientas como lo son <b>React</b> y <b>Next js</b>.</p>
                        <div className={styles.skills_img}>
                            <div>
                                <Image src="/skills/html.png" alt="Html" width={50} height={50} />
                                <p>Html</p>
                            </div>
                            <div>
                                <Image src="/skills/css.png" alt="Css" width={50} height={50} />
                                <p>Css</p>
                            </div>
                            <div>
                                <Image src="/skills/js.png" alt="JavaScript" width={50} height={50} />
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <Image src="/skills/react.png" alt="React" width={50} height={50} />
                                <p>React js</p>
                            </div>
                            <div>
                                <Image src="/skills/nextjs.png" alt="Next-js" width={50} height={50} className={styles.invertir} />
                                <p>Next js</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.backend}>
                        <h2>Backend</h2>
                        <p>Como desarrollor Backend en un principio lo utilice para comunicar mis dispositivos de IoT a una  <b>Base de datos</b> como lo es <b>MongoDb</b> y posteriormente he creado nuevas rutas para hacer una <b>consulta de los datos</b> y visualizar en tiempo real en una pagina web.</p>
                        <div className={styles.skills_img}>
                            <div>
                                <Image src="/skills/js.png" alt="JavaScript" width={50} height={50} />
                                <p>JavaScript</p>
                            </div>
                            <div>
                                <Image src="/skills/nodejs.png" alt="Node-js" width={50} height={50} />
                                <p>Node js</p>
                            </div>
                            <div>
                                <Image src="/skills/nest.png" alt="Nest-js" width={50} height={50} />
                                <p>Nest js</p>
                            </div>
                            <div>
                                <Image src="/skills/mongodb.png" alt="Npm" width={50} height={50} />
                                <p>MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.iots}>
                        <h2>IoT</h2>
                        <p>En un principio aprendi a programar <b>MicroControladores </b>{"("}como lo son los Pic18f4580{")"}, despues migre a programar en <b>Arduino</b> {"("}principal mente usando el ESP32{")"}, en esta plataforma se han creado diversos proyectos, <b>todos con la posiblilidad de conectar se a internet.</b></p>
                        <div className={styles.skills_img}>
                            <div>
                                <Image src="/skills/C++.png" alt="Arduino" width={50} height={50} />
                                <p>C++</p>
                            </div>
                            <div>
                                <Image src="/skills/microchip.png" alt="Arduino" width={50} height={50} />
                                <p>MicroChip</p>
                            </div>
                            <div>
                                <Image src="/skills/arduino.png" alt="Arduino" width={50} height={50} />
                                <p>Arduino</p>
                            </div>
                            <div>
                                <Image src="/skills/raspberry.png" alt="Raspberry" width={45} height={50} />
                                <p>RaspBerry</p>
                            </div>
                            <div>
                                <Image src="/skills/http.png" alt="Http" width={50} height={50} />
                                <p>Http</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.otros}>
                        <h2>Otras Skills</h2>
                        <p>Cuento con diversos conocientos que me ayudan a desarrollar de maneras diversas como lo es conocimientos en <b>Redes</b>, conocientos avanzados en <b>Electronica</b>, conocientos en <b>Inteligencia Artificial</b>, practica con la <b>Linea de comandos</b> y  manejo de <b>GitHub</b></p>
                        <div className={styles.skills_img}>
                            <div>
                                <Image src="/icons/github.png" alt="GitHub" width={50} height={50} />
                                <p>Github</p>
                            </div>
                            <div>
                                <Image src="/skills/matlab.png" alt="Matlab" width={50} height={50} />
                                <p>Matlab</p>
                            </div>
                            <div>
                                <Image src="/skills/lineaComandos.png" alt="Linea de Comandos" width={50} height={50} />
                                <p>Linea de Comandos</p>
                            </div>
                            <div>
                                <Image src="/skills/python.png" alt="Python" width={50} height={50} />
                                <p>Python</p>
                            </div>
                        </div>
                    </div>
                </div>

                <a className={styles.next} href="#projects">
                    <Image
                        src="/icons/flecha.png"
                        alt="linkedin"
                        width={30}
                        height={30}
                    />
                    Proyectos
                </a>

            </div>
            {/* ---------------------------- */}
            <div className={styles.linea}></div>
            <div id="projects">
                <a className={styles.next} href="#welcome">
                    <Image
                        src="/icons/flechaA.png"
                        alt="linkedin"
                        width={30}
                        height={30}
                    />
                    Inicio
                </a>
                <div className={styles.goProjects} >
                    <h1>Proyectos Realizados</h1>
                    <hr />
                    <div>
                        <p>Hecha un vistaso a mis proyectos que he realizado a lo largo del tiempo</p>
                        <button onClick={() => pageReturn("projects")}>PROYECTOS</button>
                    </div>
                    {/* <Link href={"/portfolio"}>Proyectos</Link> */}
                </div>
            </div>


        </div>
    )
}

export default HomeComponent