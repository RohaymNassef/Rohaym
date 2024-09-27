import React, { useState } from 'react';
import "./Home.css";
import img from "../../images/1.png";
import {FaLinkedin} from "react-icons/fa6";
import { FaFacebook , FaWhatsapp , FaCode} from "react-icons/fa";
import { IoLocationSharp , IoSettingsSharp ,IoPhonePortrait } from "react-icons/io5";
import { MdEmail , MdOutlineSettingsEthernet} from "react-icons/md";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='home'>
       
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
    
      <div className="homeee">
      <div className='home-about'>
      <h1  className='hhhhhh'>About Me <div className='line'></div> </h1>
      <p>Experienced Web Developer adept in all stages of advanced web development. Knowledgeable in user interface,
        testing, and debugging processes. Bringing forth expertise in design, installation, testing and maintenance of web
        systems. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including
        Microsoft SQL Server. Able to effectively self-manage during independent
        projects, as well as collaborate in a team setting</p>
      </div>
      <div className='what'>
        <h1 className='hhhhhh'>What I Do ! <div className='line'></div></h1>
        <div className="what-flex">
          <div className="what-top">
          <div className="what-top-left">
          <div className='what-title'>
              <FaCode className='left-icon'/>
              <h3>Web Developement</h3>
            </div>
            <p>Elevating your online presence, I specialize in crafting dynamic and responsive websites using leading web frameworks like React js and Flask. From sleek user interfaces to robust backend systems, I bring your digital vision to life with expertise in technologies such as laravel Framework, Postman APi.</p>
          </div>
          <div className="what-top-right">
            <div>
                <IoSettingsSharp className='left-icon'/>
                <h3>Automation</h3>
            </div>
            <p>Streamlining operations with a touch of magic, I leverage automation to eliminate repetitive tasks, optimize data pipelines, and orchestrate complex workflows. From backend processes to intricate task management, my automation solutions enhance efficiency, allowing you to focus on strategic priorities.</p>
          </div>
          </div>
          <div className="what-bottom">
            <div className="what-bottom-left">
              <div>
                  <FaCode className='left-icon'/>
                  <h3>Convert designs to HTML CSS code</h3>
              </div>
              <p>I excel at converting designs into HTML, CSS and JS code, bringing creative visions to life on the web with precision and responsiveness.</p>
            </div>
            <div className="what-bottom-right">
                <div>
                  <MdOutlineSettingsEthernet className='left-icon'/>
                  <h3>Clean Code</h3>
                </div>
                <p>Writing clean, maintainable code that adheres to industry standards and best practices.</p>
            </div>
          </div>
        </div>
        <div className='what-social'>
        <div><Link to={"https://www.facebook.com/profile.php?id=100069746461176&mibextid=ZbWKwL"}><FaFacebook/></Link></div>
          <div><Link to={"https://wa.me/qr/IMPPBMKLYKSRF1"}><FaWhatsapp/></Link></div>
          <div><Link to={"https://www.linkedin.com/feed/"}><FaLinkedin/></Link></div>
        </div>
      </div>




      </div>
      
    </div>
  );
}

export default Home;
