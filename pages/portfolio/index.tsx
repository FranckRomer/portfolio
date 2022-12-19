import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/header'
import styles from './Portfolio.module.css'
import HomeComponent from '../../components/pages/home/Home'
import Projects from '../../components/pages/projects'
import Contact from '../../components/pages/contact'
import FondoAnimado from '../../components/FondoAnimado/fondoAnimado'

const Portfolio = () => {
    const [page, setPage] = useState("home")

    const hijoAPadre = (datoshijo: any) => {
        setPage(datoshijo);
    }
    const pageReturn = (pageReturn: any) => {
        setPage(pageReturn);
    }

    

    return (
        <div className={styles.Porfolio}>
            <FondoAnimado></FondoAnimado>
            <Header page={page} hijoAPadre={hijoAPadre}></Header>
            <div className={styles.main}>
                {page === 'home' ? <HomeComponent  pageReturn={pageReturn}/> : ""}
                {page === 'projects' ? <Projects /> : ""}
                {page === 'contact' ? <Contact /> : ""}
            </div>
        </div>
    )
}

export default Portfolio