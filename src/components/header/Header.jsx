import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import { HeaderSocials } from './HeaderSocials';
import { FormattedMessage } from 'react-intl';
import { Languages } from '../lang/Languages';

export const Header = () => {


  return (
    <header>
      <div className="container header__container">
      <Languages/>
        <h5>
          <FormattedMessage 
            id="app.welcome"
            defaultMessage="Hello I'm"
          />
        </h5>
        <h5>Eric Rusinque</h5>
        <h5 className="text-ligth">
          <FormattedMessage 
            id="header.career"
            defaultMessage="React Js Frontend Developer"
          />
        </h5>
        <CTA />

        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt='Eric Fernando Rusinque' />
        </div>
        <a href='#contact' className='scroll__down'>
          <FormattedMessage
            id="header.scroll"
            defaultMessage="Scroll Down"
          />
        </a>

      </div>
    </header>
  )
}
