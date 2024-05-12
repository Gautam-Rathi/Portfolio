import React, { useState,useRef } from 'react';
import './ContactForm.css'; 
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Divider } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    
    setFormData({
      from_name: '',
      reply_to: '',
      message: ''
    });
  };

  return (
    <div className='contactbackcolor'>
    <div className="contactdata"> My Mail & Phone No. -
        <MailOutlineIcon onClick={()=>{return(toast.info("gautamrathicode@gmail.com"))}} style={{color:"red"}}/>
        <LocalPhoneIcon onClick={()=>{return(toast.info("7289989372"))}} style={{color:"blue"}}/>

    </div>
    <div className="contact-form">

      <h1>Contact Me</h1> 
      <Divider/>
      <form ref={form} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from_name">Name:</label>
          <input
            type="text"
            id="name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="reply_to">Email:</label>
          <input
            type="email"
            id="email"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="contactbtn">Submit</button>
      </form>
    </div>
    <ToastContainer/>
    </div>
  );
};

export default ContactForm;