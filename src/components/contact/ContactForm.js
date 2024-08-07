import React, { useState,useRef,useEffect } from 'react';
import './ContactForm.css'; 
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Divider } from '@mui/material';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
      reply_to: '',
      message: ''
  });

  const [page,setPage] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      return(setPage(true))
    },1000)

  },[])

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
    const {from_name,reply_to,message} = formData;
    if(!from_name || !reply_to || !message){
        toast.warn("Please Fill All Fields")
    }
    else if(!reply_to.includes("@")){
        toast.warn("Invalid mail")

    }
    else{

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, {
        publicKey: process.env.REACT_APP_PUBLIC,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Mail Sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.warn("FAILED ERROR OCCURED")
        },
      );
    
    setFormData({
      from_name: '',
      reply_to: '',
      message: ''
    });
}
  };

  return (
    <div className='contactbackcolor'>
        {
        page?<>
    <div className="contactdata"> My Mail & Phone No. -
        <MailOutlineIcon onClick={()=>{return(toast.info("gautamrathicode@gmail.com"))}} style={{color:"red",cursor:"pointer"}}/>
        <LocalPhoneIcon onClick={()=>{return(toast.info("7289989372"))}} style={{color:"blue",cursor:"pointer"}}/>

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
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="reply_to">Email:</label>
          <input
            type="text"
            id="email"
            name="reply_to"
            value={formData.reply_to}
            onChange={handleChange}
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            
          ></textarea>
        </div>
        <button type="submit" className="contactbtn btn">Submit</button>
      </form>
    </div>
    <ToastContainer/></>:<Box className="boxanimation" sx={{ width: '100%' }}>
    <LinearProgress />
    <SkeletonTheme baseColor="lightblue" highlightColor="#9f5bf2">


      <Skeleton/>
      <div className="skelebox">

      <div className="headcontactele">
        <Skeleton className="skeleheadcontactele"/>
      </div>
      <Divider/>
      <div className="formcontactele">
        <div className="headformcontactele">
          <Skeleton className='skeleheadformcontactele'/>
        </div>
        <div className="descformcontactele">
          <Skeleton className='skeledescformcontactele'/>
        </div>
      </div>

      <div className="formcontactele">
        <div className="headformcontactele">
          <Skeleton className='skeleheadformcontactele'/>
        </div>
        <div className="descformcontactele">
          <Skeleton className='skeledescformcontactele'/>
        </div>
      </div>

      <div className="formcontactele">
        <div className="headformcontactele">
          <Skeleton className='skeleheadformcontactele'/>
        </div>
        <div className="descformcontactele2">
          <Skeleton className='skeledescformcontactele2'/>
        </div>
      </div>

      <div className="btncontactele">
        <Skeleton className="skelebtncontactele" />
      </div>




      </div>




</SkeletonTheme>
  </Box>}
    </div>
  );
};

export default ContactForm;
