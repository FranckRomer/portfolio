import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/header'
import styles from './Portfolio.module.css'
import HomeComponent from '../../components/pages/home/Home'
import Projects from '../../components/pages/projects'
import Contact from '../../components/pages/contact'

const Portfolio = () => {
    const [page, setPage] = useState("home")
    
    const hijoAPadre = (datoshijo:any) => {
        setPage(datoshijo);
      }
    
    return (
        <div className={styles.Porfolio}>
            <Header page={page}  hijoAPadre={hijoAPadre}></Header>
            <div className={styles.main}>
                {page === 'home' ? <HomeComponent/> : ""}                
                {page === 'projects' ? <Projects/> : ""}                
                {page === 'contact' ? <Contact/> : ""}                
            </div>
        </div>
    )
}

export default Portfolio