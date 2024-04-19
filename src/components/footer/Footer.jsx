import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>HUYNH THIEN PHU</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/huynhthienphu662003/"><BsLinkedin/></a>
          <a href="https://github.com/KelvinPhu"><BsGithub/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Huynh Thien Phu. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer