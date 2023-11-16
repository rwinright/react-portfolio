import { faEnvelopeSquare, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'

export const Contact = () => {
  return (
    <div className="Contact">
      <h1>Contact Me!</h1>
      <h2>Got a project or looking to hire?</h2>
      <div className="container">
        <div className='contact-link'>
          <FontAwesomeIcon icon={faPhone} />
          <span> 616-821-6045</span>
        </div>
        <div className='contact-link'>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
          <span> rogerwinright@gmail.com</span>
        </div>
        <div className='contact-link'>
          <FontAwesomeIcon icon={faGithub} />
          <span> <a href="github.com/rwinright">github.com/rwinright</a></span>

        </div>
        <div className='contact-link'>
          <FontAwesomeIcon icon={faLinkedinIn} />
          <span> <a href="http://www.linkedin.com/in/rwinright">linkedin.com/in/rwinright</a></span>
        </div>
      </div>
    </div>
  )
}
