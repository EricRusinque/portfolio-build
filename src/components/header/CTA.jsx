import CV_ES from '../../assets/CV-ES.pdf';
import CV_EN from '../../assets/CV-EN.pdf';

import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { langContext } from '../../context/langContext';

const CTA = () => {

  const { locale } =  useContext(langContext)
  console.log( locale );
  return (
    <div className='cta'>
       {
          locale === 'en-US'
          ?
            <a href={CV_EN} download className='btn'>
            <FormattedMessage
                id="cta.cv"
                defaultMessage="Download CV (EN)"
            />
            </a>
          :
          
           <a href={CV_ES} download className='btn'>
           <FormattedMessage
               id="cta.cv"
               defaultMessage="Download CV (EN)"
           />
           </a>
       }
        <a href='#contact' className='btn btn-primary'>
        <FormattedMessage
              id="cta.talk"
              defaultMessage="Let's talk"
          />
        </a>
    </div>
  )
}

export default CTA