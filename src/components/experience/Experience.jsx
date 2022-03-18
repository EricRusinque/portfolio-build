import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';
import { backSkills, frontSkills } from './data';

export const Experience = () => {
  return (
    <section id='experience' className='experience__section-container'>
      <h5>
        <FormattedMessage
          id="exp.sub"
          defaultMessage="What Skills I have?"
        />
      </h5>
      <h2>
        <FormattedMessage
          id="exp.title"
          defaultMessage="My Experience"
        />
      </h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3> 
            <FormattedMessage
              id="exp.front"
              defaultMessage="Frontend Development"
            />
          </h3>
          <div className='experience__content'>
            {
              frontSkills.map( ({ skill, levelEN, levelES }) => (
                <article key={ skill } className='experience__details'>
                  <BsPatchCheckFill className='experience__details-icon'  />
                <div>
                <h4>
                  <FormattedMessage
                      id="exp.front.skill" 
                      defaultMessage={ skill }
                      values={{
                        skill
                      }}
                  />
                </h4>
                <small className='text-light'>
                  <FormattedMessage
                      id="exp.front.level" 
                      defaultMessage={ levelEN }
                      values={{
                        levelES,
                        levelEN
                      }}
                  />
                </small>
                </div>
              </article>
              ))
            }
          </div>
        </div>

        {/* END OF Frontend */}
        <div className='experience__backend'>
            <h3> 
              <FormattedMessage
                id="exp.back" 
                defaultMessage="Backend Development"       
              />
            </h3>
            <div className='experience__content'>
              {
                backSkills.map( ({ skill, levelEN, levelES }) => (
                  <article key={skill} className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icon' />
                    <div>
                      <h4>
                        <FormattedMessage
                          id="exp.back.skill" 
                          defaultMessage={ skill }
                          values={{
                            skill,
                          }}
                        />
                      </h4>
                      <small className='text-light'>
                        <FormattedMessage
                          id="exp.back.level" 
                          defaultMessage={ levelEN }
                          values={{
                            levelES,
                            levelEN
                          }}
                        />
                      </small>
                    </div>
                  </article>
                ))
              }
            </div>
          </div>
      </div>
    </section>
  )
}