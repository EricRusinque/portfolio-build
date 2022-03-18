import './about.css';
import ME from '../../assets/me.png';
import { FaAward } from  'react-icons/fa';
import { VscFolderLibrary } from  'react-icons/vsc';
import { FormattedMessage } from 'react-intl';

export const About = () => {
  return (
    <section id='about'>
      <h5>
          <FormattedMessage
            id="about.know"
            defaultMessage="Get To Know"
          />
      </h5>
      <h2> 
          <FormattedMessage
            id="about.me"
            defaultMessage="About Me"
          />
        </h2>
      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="Eric Fernando Rusinque" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>
                  <FormattedMessage
                    id="about.experience"
                    defaultMessage="Experience"
                  />
                </h5>
                <small> 
                  <FormattedMessage
                    id="about.expyear"
                    defaultMessage="2+ Years Working"
                  />
                </small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>
                  <FormattedMessage
                    id="about.personal.pro"
                    defaultMessage="Personal Projects"
                  />
                </h5>
                <small>5+ Completed</small>
              </article>
            </div>
            <p>
              <FormattedMessage
                id="about.desc"
                defaultMessage="I am a Web Developer passionate about technology, I have 2 years of experience in the world of development. I specialize in the web part with React Js (Using libraries like Redux). I have been working on projects with Node JS with Express for about half a year, with less experience in this technology, but always open to learning. I like to work in a team and with the ability to adapt to the work environment."
              />
            </p>
            <a href='#contact' className='btn btn-primary'>
              <FormattedMessage
                  id="cta.talk"
                  defaultMessage="Vamos a Hablar"
                />
            </a>
          </div>
      </div>
    </section>
  )
}
