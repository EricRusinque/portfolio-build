import './contact.css';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import { MdOutlineEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import { useFormik } from 'formik';
import { FormattedMessage } from 'react-intl';




export const Contact = () => {

  const form = useRef();

  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      name_send: '',
      email: '',
      message: '',
    },
    onSubmit: (e) => {
      emailjs.sendForm('service_thaa6be', 'template_7few98p', form.current, 'CKLzUcPwH_QEnfCzt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
      Swal.fire({
          title: 'Great!',
          text: 'Your email was sent',
          icon: 'success',
          iconColor: 'white',
          color: 'white',
          background: 'black',
          confirmButtonText: 'Good',
          confirmButtonColor: '#484848',
          focusConfirm: true,
         
        })
      e.target.reset();
    },
    validationSchema: Yup.object({
      name_send: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('The name is Required'),
      email: Yup.string()
                .email('The email does not have a valid format')
                .required('The email is Required'),
      message: Yup.string()
                  .max(700, 'Must be 700 characters or less')
                  .required('The message is Required')

    })
    
  })

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_thaa6be', 'template_7few98p', form.current, 'CKLzUcPwH_QEnfCzt')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });

  //   e.target.reset()
  // };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>  
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>emprenderusinque@hotmail.com</h5>
              <a href='mailto:emprenderusinque@hotmail.com' target="_blank">
                <FormattedMessage
                  id="contact.send" 
                  defaultMessage= "Send a message"           
                />
              </a>
          </article>
          <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+57 3204067883</h5>
              <a href='https://api.whatsapp.com/send?phone=+573204067883' target="_blank">
                <FormattedMessage
                  id="contact.send" 
                  defaultMessage= "Send a message"           
                />
              </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={ form } onSubmit={ handleSubmit } >
          <input 
            type="text" 
            autoComplete='off' 
            placeholder="Your Name" 
            {...getFieldProps('name_send')}
          />
          { touched.name_send  && errors.name_send && <span>{ errors.name_send }</span>}

          <input 
            type="email" 
            autoComplete='off'  
            placeholder="Your Email" 
            {...getFieldProps('email')}
          />
          { touched.email && errors.email && <span>{ errors.email }</span>}

          <textarea 
            name="message"  
            rows="7" placeholder="Your Message" 
            {...getFieldProps('message')}

          >
          </textarea>
          { touched.message && errors.message && <span>{ errors.message }</span>}

          <button 
            type='submit' 
            className='btn btn-primary'
          >
            <FormattedMessage
                  id="contact.send" 
                  defaultMessage= "Send a message"           
            />    
          </button>
        </form>
      </div>

    </section >
  )
}
