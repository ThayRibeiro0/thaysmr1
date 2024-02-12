import 'bootstrap/dist/css/bootstrap.min.css';
import './socialIcons.css';
import Pdf from '../../src/assets/1- Thays Ribeiro Maher.pdf'

import { Container } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { IoIosDocument } from "react-icons/io";

export const SocialIcons = () => {

  return (
    <div>
        <Container className='socialicons'>
            <div className='singleCol social-media-icons-white d-flex justify-content-evenly'>
                <a href='https://www.linkedin.com/in/thays-moia-ribeiro-475b39275/'>
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                </a>
                <a href='https://github.com/ThayRibeiro0'>
                    <FontAwesomeIcon className='icon' icon={faGithub} />
                </a>
                <a href={Pdf} > 
                    <IoIosDocument className='icon' />
                </a>
            </div>
        </Container>

    </div>
  )
}
