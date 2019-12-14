import React from 'react'
import './SocialMedias.css'

import github from '../assets/github-icon.svg'
import linkedin from '../assets/linkedin-icon.svg'
import email from '../assets/email-icon.svg'

export default function SocialMedias() {
    return (
        <div className="main-container w3-margin-top">
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/pedrogneri/"><img className="social-media" src={github} alt="logo"/></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/pedrogneri/"><img className="social-media" src={linkedin} alt="logo"/></a>
            <a rel="noopener noreferrer" target="_blank" href="mailto:pedrogneri@gmail.com"><img className="social-media" src={email} alt="logo"/></a>
        </div>
    )
}