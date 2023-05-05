import React, { useRef } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import {MdOutlineMail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { Email } from '@mui/icons-material'
import {BsWhatsapp} from 'react-icons/bs'

export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

    emailjs.sendForm('AJ123', 'template_rmwhr8h', form.current, 'rBaytK4cEP_H3eF81')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
          <MdOutlineMail className='contact_option-icon' />
          <h4>Email</h4>
          <h5>jogendrayadav @gmail.com</h5>
          <a href='mailto:jogendrayadav927@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
          <BsMessenger className='contact_option-icon' />
          <h4>Messanger</h4>
          <h5>Jogendra Yadav</h5>
          <a href='https://m.me/jogendra.yadav.946?eav=AfYF8LzU5Ekq4iqYSTWRKZet4-XD3VPy5Bd71qoV-MF1X39OUaBmPiqdNsEWXNYjgyA&paipv=0' target='__blank'>Send a message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon' />
          <h4>What's App</h4>
          <h5>+91 8299071068</h5>
          <a href='https:api.whatsapp.com/send?phone=918299071068' target='__blank'>Send a message</a>
          </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type={Text} name='name' placeholder='Your Full Name' required/>
            <input type={Email} name='email' placeholder='Your Email' required/>
            <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}
