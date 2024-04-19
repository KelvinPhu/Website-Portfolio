import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>

      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
            <h3>Blockchain Development (On Processing..)</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Solidity</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Vyper</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Rust</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              
            </div>
        </div>
        {/* End of blockchain part */}

        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Spring Framework</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              
            </div>
        </div>
        {/* End of backend part */}

        <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML / CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              
            </div>
        </div>
        {/* End of frontend part */}

        <div className="experience__frontend">
            <h3>Database</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>SQL (mySQL, MS SQL Server, Oracle)</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>no-SQL (MongoDB)</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>

            </div>
        </div>
        {/* End of database part */}

        
      </div>
    </section>
  )
}

export default Experience