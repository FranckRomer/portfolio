import React from 'react'
import styles from './Projects.module.css'
import Image from 'next/image'

const Projects = () => {

  {/* //? ------------------------------------------- */ }
  return (
    <div className={styles.Projects}>
      <section className={styles.welcome}>
        <div className={styles.img_welcome}></div>
        <a href="#empresas">
          <h1>Proyectos</h1>
        </a>
      </section>
      <hr />
      {/* //? ------------------------------------------- */}
      <section className={styles.empresas} id="empresas">
        <h1>Proyectos para empresas</h1>
        <p>En estos proyectos solo se da informacion del proyecto, los repositorios y el codigo se encuentran en la misma empresa. Solo se mostrara un breve resumen y que tecnologias fueron utilizadas</p>
        <hr />
        {/* //* ------------------------------------------ */}
        <div className={styles.dana}>
          <div className={styles.dana_info}>
            <h1>DANA</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quasi amet error labore explicabo. Beatae, nisi tempora? Asperiores, ipsa voluptate voluptatum tempora inventore iure hic eius, adipisci in quasi quisquam assumenda? Exercitationem debitis perferendis sapiente itaque tempore facilis assumenda amet laboriosam nihil doloribus aperiam eveniet quaerat quasi, voluptate atque officiis.</p>
          </div>
          <div className={styles.dana_img}>
            <Image
              src="/projects/dana.jpeg"
              alt="linkedin"
              width={600}
              height={300}
            />
          </div>
        </div>
        <hr />
        {/* //* ------------------------------------------ */}
        <div className={styles.train}>
          <div className={styles.train_info}>
            <h1>Train</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium dolorem sed mollitia officiis? Cumque, ullam voluptate? Reiciendis architecto voluptatibus veniam odio dolore nostrum consequuntur consequatur deserunt tempore, laboriosam praesentium exercitationem, aperiam non provident officiis? Architecto, necessitatibus quisquam facilis assumenda dicta ipsum voluptates culpa quo dolorem tempore nesciunt nostrum iste.</p>
          </div>
          <div className={styles.train_img}>
            <Image
              src="/projects/train.jpeg"
              alt="linkedin"
              width={600}
              height={300}
            />
          </div>
        </div>
        <hr />
        <div className={styles.adds}>
          <div className={styles.adds_info}>
            <h1>Buss Adds</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi omnis beatae est quas quo distinctio quidem, fugit eius, atque totam provident eum. Quae ipsam fugit sequi veritatis impedit pariatur.</p>
          </div>
          <div className={styles.adds_img}>
            <Image
              src="/projects/train.jpeg"
              alt="linkedin"
              width={600}
              height={300}
            />
          </div>
        </div>
      </section>
      <hr />
      {/* //? ------------------------------------------- */}
      <section className={styles.personales}>
        <h1>Proyectos Personales</h1>
        <hr />
        <div></div>
      </section>
      <hr />
      {/* //? ------------------------------------------- */}
      <section className={styles.contacto}>
        <h1>Contacto</h1>
      </section>

    </div>
  )
}

export default Projects