import React, { useState } from 'react';
import "./Contact.css";
import img from "../../images/1.png";
import {FaLinkedin} from "react-icons/fa6";
import { FaFacebook , FaWhatsapp } from "react-icons/fa";
import { IoLocationSharp  ,IoPhonePortrait  } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from "axios";
import { Formik, useFormik } from 'formik';
import emailjs from '@emailjs/browser';
const Contact = () => {



  const [spinner, setSpinner] = useState(true);
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");



  const formik = useFormik({
    initialValues : {
      username : "",
      email : "",
      phone : "",
      address : "",
      message : ""
    },
    onSubmit: async (values) => {
      setSending(true);
      setSuccessMessage("");
      setErrorMessage("");
      try {
        await emailjs.send(
          "service_mx8hp2i",
          "template_kn3dob3",
          {
            username: values.username,
            email: values.email,
            phone: values.phone,
            address: values.address,
            message: values.message,
          },
          "pA6EdQzjVwoooPsfe"
        );
        setSuccessMessage("Your message has been sent!");
        formik.resetForm();
      } catch (error) {
        console.error(error);
        setErrorMessage("Failed to send message. Please try again.");
      } finally {
        setSending(false);
      }
    },
    validate : (values)=>{
      const errors = {};
      if(!values.username){
        errors.username = "Please Enter Your Name";
      }
      if(!values.phone){
        errors.phone = "Please Enter Your Phone";
      }
      if(!values.address){
        errors.address = "Please Enter Your Address";
      }
      if(!values.message){
        errors.message = "Please Enter Your Message";
      }
      if (!values.email) {
        errors.email = 'Please Enter Your Email';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }
  })
  
  
  return (
    <div className='contact'>
        <div className="contact-flex">
        <div className="sidebar">
      <div className='image'>
          <img src={img} alt="Photo" />
      </div>
        <div className='me'>
        <h2>Eng / Rohaym Ahmed</h2>
        <p className='front'>Forntend Developer</p>
        </div>
        <div className='social'>
          <div><Link to={"https://www.facebook.com/profile.php?id=100069746461176&mibextid=ZbWKwL"}><FaFacebook/></Link></div>
          <div><Link to={"https://wa.me/qr/IMPPBMKLYKSRF1"}><FaWhatsapp/></Link></div>
          <div><Link to={"https://www.linkedin.com/feed/"}><FaLinkedin/></Link></div>
        </div>
        <div className='info'>
          <div>
          <IoPhonePortrait className='info-icon'/>
          <p>Phone : <span>01064987009</span> </p>
          </div>
          <div>
              <MdEmail className='info-icon'/>
              <p>Email : <span>rohaymelgendy691@gmail.com</span> </p>
          </div>
          <div>
              <IoLocationSharp className='info-icon'/>
              <p>Location : <span>Mit-Ghmr - Eygpt</span> </p>
          </div>
          <div className='resume'>
            
            <Link to={"https://drive.google.com/file/d/1BW9q8jQ42KnIjNJKtCtiDUS3S3HVU9SO/view?usp=drivesdk"}><button> Download My Resume</button></Link>
            
          </div>
        </div>
        </div>
        <div className="contact-contant">
            <h2>Contact Me : </h2>
            <form onSubmit={formik.handleSubmit}>
                <input type="text"  
                placeholder='Your Name'
                name='username'
                onChange={formik.handleChange}
                value={formik.values.username}
                required
                />
                <p className='p-formik'>{formik.errors.username ? formik.errors.username : ""}</p>
                <input type="email"
                placeholder='Email'
                onChange={formik.handleChange}
                value={formik.values.email}
                required
                name='email'
                />
                <p className='p-formik'>{formik.errors.email ? formik.errors.email : ""}</p>
                <input type="number"
                placeholder='Your Phone'
                onChange={formik.handleChange}
                value={formik.values.phone}
                required
                name='phone'
                />
                <p className='p-formik'>{formik.errors.phone ? formik.errors.phone : ""}</p>
                <input type="text"
                placeholder='Address'
                onChange={formik.handleChange}
                value={formik.values.address}
                required
                name='address'
                />
                <p className='p-formik'>{formik.errors.address ? formik.errors.address : ""}</p>
                <input type="text"
                placeholder='Message'
                onChange={formik.handleChange}
                value={formik.values.message}
                name='message'
                />
                <p className='p-formik'>{formik.errors.message ? formik.errors.message : ""}</p>
                <button type="submit" value={sending ? "Sending..." : "Submit"} disabled={sending}>Submit</button>
          {successMessage && <p>{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
            </form>
        </div>
        </div>
        
    </div>
  );
}

export default Contact;



