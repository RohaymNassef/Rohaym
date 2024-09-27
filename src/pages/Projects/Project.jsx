import React from 'react';
import "./Project.css";
import img from "../../images/1.png";
import {FaLinkedin} from "react-icons/fa6";
import { FaFacebook , FaWhatsapp} from "react-icons/fa";
import { IoLocationSharp  ,IoPhonePortrait  } from "react-icons/io5";
import { MdEmail  } from "react-icons/md";
import img1 from "../../images/2.png";
import img2 from "../../images/3.png";
import img3 from "../../images/4.png";
import img4 from "../../images/5.png";
import img5 from "../../images/6.png";
import img6 from "../../images/7.png";
import img7 from "../../images/8.png";

import { Link } from 'react-router-dom';

const Project = () => {
  return (
    <div className='projects'>
        <div className="projects-flex">
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
      <div className="project-contant">
            <div className="works">
                <h2 className='hwork'>Work <div className='line'></div> </h2>
                <div className="work">
                <Link to={"https://multy-shop.vercel.app/"}><button className='pro'><span class="text"><img src={img1} alt="" /></span><span>ُُEcommerce By React Js</span></button></Link>
                </div>
                <div className="work">
                <Link to={"https://alsona-ashen.vercel.app/"}> <button className='pro'><span class="text"><img src={img2} alt="" /></span><span>Islamic Project To Deal With API</span></button></Link>
                </div>
                <div className="work">
                <Link to={"https://rohaymnassef.github.io/Game-oop-/"}>   <button className='pro'><span class="text"><img src={img3} alt="" /></span><span>Project To Deal With OOP</span></button></Link>
                </div>
                <div className="work">
                <Link to={"https://rohaymnassef.github.io/e-book/"}>  <button className='pro'><span class="text"><img src={img4} alt="" /></span><span>ُُEcommerce For Sale Books</span></button></Link>
                </div>
                <div className="work">
                <Link to={"https://rohaymelgendy24.github.io/e-commrce-3/"}>  <button className='pro'><span class="text"><img src={img5} alt="" /></span><span>Ecommerce By CSS</span></button></Link>
                </div>
                <div className="work">
                <Link to={"https://rohaymelgendy24.github.io/e-commerce--tmplate-2/"}><button className='pro'><span class="text"><img src={img6} alt="" /></span><span>Ecommerce By CSS</span></button></Link>
                </div>
                <div className="work">
                <Link to={"https://rohaymelgendy24.github.io/tempalte/"}>   <button className='pro'><span class="text"><img src={img7} alt="" /></span><span>Ecommerce By CSS</span></button></Link>
                </div>

            </div>
      </div>
        </div>
    </div>
  );
}

export default Project;
