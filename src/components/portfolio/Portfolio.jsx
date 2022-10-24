import './portfolio.css';
import { data } from './data';
import { FormattedMessage } from 'react-intl';

export const Portfolio = () => {

  console.log(data.demo)
  return (
    <section id='portfolio'>
      <h5>  
        <FormattedMessage
          id="port.sub" 
          defaultMessage= "My Recent Works"           
        />
      </h5>
      <h2>
        <FormattedMessage
          id="port.title" 
          defaultMessage= "Portfolio"           
        />
      </h2>

      <div className='container portfolio__container'>
        {
          data.map( ({ id, title, image, github, demo }) => (
            <article key={ id }className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={ image } alt={ title } />
              </div>
              <div className='portfolio__item-cta'>
                <h3>{ title }</h3>
                <a href={ github } target="_blank" className='btn'>Github</a>
                {
                  demo && <a href={ demo } target="_blank" className='btn btn-primary' >Live Demo</a>
                }
              </div>
            </article>
          ))
        }

      </div>
    </section>
  )
}
