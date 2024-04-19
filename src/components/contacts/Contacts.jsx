import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contacts = () => {

  return (
    <section id='contacts'>

      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>phuhuynh197@protonmail.com</h5>
            <a href="mailto:thakshiladb2000@gmail.com" target='_blank' rel='noreferrer'>Email Me</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>(+65) 86542066</h5>
            <a href="https://wa.me/86542066" target='_blank' rel='noreferrer'>WhatsApp Me</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>X</h4>
            <h5>@kelvin_hnh</h5>
            <a href="https://twitter.com/kelvin_hnh" target='_blank' rel='noreferrer'>X Message</a>
          </article>
        </div>

      </div>
    </section>
  )
}

export default Contacts