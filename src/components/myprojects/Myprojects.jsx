import React from 'react'
import './myprojects.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={project1} alt="" />
            </div>
            <h3>Banking Operation System</h3>
            <small className='text-light'>Spring Boot | Angular | SQL Server</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/KelvinPhu/Banking-Operation-System" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={project2} alt="" />
            </div>
            <h3>E-Commerce System (On Developing...)</h3>
            <small className='text-light'>Spring Boot | ReactJS | MongoDB | AWS | Microserver</small>
            <div className="portfolio__item-cta">
              <a href="..." target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={project3} alt="" />
            </div>
            <h3>Cryptocurrency Application Search coin (On Completing 95%...) </h3>
            <small className='text-light'>ReactJs | SQL Server | Axios API | Netlify</small>
            <div className="portfolio__item-cta">
              <a href="/" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
        </article>
        
      </div>
    </section>
  )
}

export default Myprojects