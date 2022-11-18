import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>
        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">
                    <div className="contact__card">
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">joseaarevaloa@gmail.com</span>
                            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" 
                            className="contact__button"
                            rel="noopener noreferrer" target='_blank'>Write me
                            <i class="uil uil-fast-mail contact__card-icon"></i></a>
                    </div>
                    <div className="contact__card">
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+57 3005119486</span>
                            <a href="https://web.whatsapp.com/" 
                            className="contact__button"
                            rel="noopener noreferrer" target='_blank'>Write me
                            <i class='bx bxl-whatsapp contact__card-icon'></i></a>
                    </div>
                    <div className="contact__card">
                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">joseaarevaloa</span>
                            <a href="https://www.linkedin.com/in/joseaarevaloa/" 
                            className="contact__button"
                            rel="noopener noreferrer" target='_blank'>Write me
                            <i class='bx bxl-linkedin contact__card-icon'></i>
                            </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>
                <form action="" className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className='contact__form-input' 
                        placeholder='Insert your name' />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='email' className='contact__form-input' 
                        placeholder='Insert your email' />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="project" id="" cols="30" rows="10"
                        className='contact__form-input'
                        placeholder='Write your project'></textarea>
                    </div>
                    <span className="button contact__button-send">
                    Send message
                    <i class='bx bx-mail-send bx-fade-left' ></i>
                    </span>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact