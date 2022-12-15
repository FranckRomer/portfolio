import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'

const Header = (props: any) => {
    // const [data, setData] = useState('')
    const setLocalStorage = (value:string) =>{
        console.log(value);
        props.hijoAPadre(value)
        // try {
        //     // setData(value)
        //     window.localStorage.setItem('page', value)
        // } catch (error) {
        //     console.error(error);            
        // }
    }

    return (
        <div className={styles.header}>

            <div className={styles.logo}>
                <Link href={"/"} className={styles.link}>
                    <Image
                        src="/icons/atras.png"
                        alt="Logo"
                        width={25}
                        height={25}
                    />
                    <div className={styles.info}>
                        <h3>Romer-Dev.com</h3>
                        <p>Portfolio</p>
                    </div>
                </Link>
            </div>
            <div className={styles.linea}></div>
            {/* <hr /> */}
            {/* ------------------------------------ */}
            {/* <div className={styles.links}> */}
            <div onClick={()=>setLocalStorage("home")} className={styles.actived}>
                {props.page === 'home' ?
                    <div className={styles.select}>
                        <Image
                            src="/icons/home.png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                        <div className={styles.info}> <h3>Inicio</h3> </div>

                    </div>
                    :
                    <div className={styles.link}>
                        <Image
                            src="/icons/home.png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                        <div className={styles.info}> <h4>Inicio</h4> </div>

                    </div>
                }
            </div>
            {/*  */}
            <div onClick={()=>setLocalStorage("projects")} >
                {props.page === 'projects' ?
                    <div className={styles.select}>
                        <Image
                            src="/icons/cohete .png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                        <div className={styles.info}> <h3>Proyectos</h3> </div>

                    </div>
                    :
                    <div className={styles.link}>
                        <Image
                            src="/icons/cohete .png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                        <div className={styles.info}> <h4>Proyectos</h4> </div>

                    </div>
                }
            </div>
            {/*  */}
            {/* <div onClick={()=>setLocalStorage("about")} >
                {props.page === 'about' ?
                    <div className={styles.select}>
                        <Image
                            src="/icons/contacto.png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                        <div className={styles.info}> <h3>Sobre Mi</h3> </div>

                    </div>
                    :
                    <div className={styles.link}>
                        <Image
                            src="/icons/contacto.png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                        <div className={styles.info}> <h4>Sobre Mi</h4> </div>

                    </div>
                }
            </div> */}
            {/*  */}
            <div onClick={()=>setLocalStorage("contact")} >
                {props.page === 'contact' ?
                    <div className={styles.select}>
                        <Image
                            src="/icons/telefono.png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                        <div className={styles.info}> <h3>Contacto</h3> </div>

                    </div>
                    :
                    <div className={styles.link}>
                        <Image
                            src="/icons/telefono.png"
                            alt="Logo"
                            width={25}
                            height={25}
                        />
                        <div className={styles.info}> <h4>Contacto</h4> </div>

                    </div>}
            </div>


            {/* </div> */}
            {/* <hr /> */}
            <div className={styles.linea}></div>
            <div className={styles.social}>
                <div className={styles.link}>
                    <Image
                        src="/icons/github.png"
                        alt="Logo"
                        width={25}
                        height={25}
                    />
                    <div className={styles.info}> <h4>Github</h4> </div>

                </div>
            </div>
            <div className={styles.social}>

                <div className={styles.link}>
                    <Image
                        src="/icons/linkedin.png"
                        alt="Logo"
                        width={25}
                        height={25}
                    />
                    <div className={styles.info}> <h4>Contacto</h4> </div>

                </div>
            </div>
        </div>
    )
}

export default Header