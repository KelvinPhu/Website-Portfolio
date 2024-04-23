import React from 'react'
import './about.css'
import myImage from '../../assets/profile_img2.jpeg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bachelor of IT in Mobile and Web Application <br /><i>Murdoch University in Singapore.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>GPA</h5>
                  <small>3.13 / 4</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Career</h5>
                  <small>
                    <ul>
                      <li>Software Engineer</li>
                      <li>Crypto Investment</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
              I am a <b>software engineer</b> with two years of experience in systems programming and a keen interest in cryptocurrency investments. 
              Skilled in modern programming tools, I aim to deepen my knowledge in blockchain technology and contribute to innovative projects. 
              I seek to collaborate with forward-thinking teams, leveraging my technical and investment insights to drive progress in the tech and financial sectors.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About
