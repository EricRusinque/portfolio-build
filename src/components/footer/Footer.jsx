import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io'; 
import { FormattedMessage } from 'react-intl';

export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ERIC</a>
      <ul className='permalinks'>
        <li>
          <a href="#">
          <FormattedMessage
              id="foot.home" 
              defaultMessage= "Home"           
          />
          </a>
        </li>
        <li>
          <a href="#about">
            <FormattedMessage
                id="foot.about" 
                defaultMessage= "About"           
            />
          </a>
        </li>
        <li>
          <a href="#experience">
            <FormattedMessage
                id="foot.exp" 
                defaultMessage= "Experience"           
            />
          </a>
        </li>
        <li>
          <a href="#portfolio">
            <FormattedMessage
                id="foot.port" 
                defaultMessage= "Portfolio"           
            />
          </a>
        </li>
        <li>
          <a href="#contact">
          <FormattedMessage
                id="foot.contact" 
                defaultMessage= "Contact"           
            />
          </a>
        </li>
      </ul>
      <div className='footer__socials'>
          <a href="https://facebook.com" target="_blank"><FaFacebook/></a>
          <a href="https://instagram.com" target="_blank"><FiInstagram/></a>
          <a href="https://twitter.com" target="_blank"><IoLogoTwitter/></a>
          
      </div>
      <div className='footer__copyright'>
        <small>&copy; ERIC Portafolio. All rigths reserved.</small>
      </div>
    </footer>
  )
}
