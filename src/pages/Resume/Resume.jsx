import React from 'react';
import "./Resume.css";
import img from "../../images/1.png";
import {FaLinkedin} from "react-icons/fa6";
import { FaFacebook , FaWhatsapp ,FaUserGraduate ,FaBootstrap , FaReact ,FaPhp ,FaGit ,FaGithub} from "react-icons/fa";
import { IoLocationSharp  ,IoPhonePortrait ,IoLogoJavascript , IoLogoHtml5 ,IoLogoCss3 } from "react-icons/io5";
import { MdEmail , MdWork } from "react-icons/md";
import { BiLogoJquery } from "react-icons/bi";
import { PiFileSqlLight ,PiFileCppBold} from "react-icons/pi";
import { SiMysql } from "react-icons/si";
import { Link } from 'react-router-dom';

const Resume = () => {
  return (
    <div className='resume'>
        <div className="resume-flex">    
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
        <div className="resume-contact">
            <h2 className='hhhhhh'>Resume <div className='line'></div> </h2>
            <div className="resume-contact-flex">
                <div className="resume-left">
                    <div className='resume-icon'>
                        <FaUserGraduate className='res-icon' />
                        <h3>Education</h3>
                    </div>
                    <div className='resume-info'>
                        <p>2022 - 2026</p>
                        <h3>Computer Science</h3>
                        <p>Zagazig University</p>
                    </div>
                    <div className='resume-info'>
                        <p>2022 - 2023</p>
                        <h3>Bravo Course</h3>
                        <p>Full Stuck Course</p>
                    </div>
                </div>
                <div className="resume-right">
                <div className='resume-icon'>
                        <MdWork className='res-icon'/>
                        <h3>Experience</h3>
                    </div>
                    <div className='resume-info'>
                        <p>2023</p>
                        <h3>Freelancer</h3>
                        <p>Khamsat / Upwork</p>
                    </div>
                    <div className='resume-info'>
                        <p>2024</p>
                        <h3>Frontend Developer</h3>
                        <p>Freelancer</p>
                    </div>
                </div>
            </div>
            <div className="Work-skils">
                <h2>Work Skills</h2>


                <div className="carts">
                <div className="cart">
                    <IoLogoJavascript className='cart-icon'/>
                    <h3>Java Script</h3>
                </div>
                <div className="cart">
                    <IoLogoHtml5 className='cart-icon'/>
                    <h3>Html5</h3>
                </div>
                <div className="cart">
                    <IoLogoCss3 className='cart-icon'/>
                    <h3>Css3</h3>
                </div>
                <div className="cart">
                    <BiLogoJquery className='cart-icon'/>
                    <h3>Jquery</h3>
                </div>
                <div className="cart">
                    <FaBootstrap className='cart-icon'/>
                    <h3>Bootstrap</h3>
                </div>
                <div className="cart">
                    <FaReact className='cart-icon'/>
                    <h3>React Js</h3>
                </div>
                <div className="cart">
                    <FaPhp className='cart-icon'/>
                    <h3>PHP</h3>
                </div>
                <div className="cart">
                    <PiFileSqlLight className='cart-icon'/>
                    <h3>SQLt</h3>
                </div>
                <div className="cart">
                    <SiMysql className='cart-icon'/>
                    <h3>MySql</h3>
                </div>
                <div className="cart">
                    <FaGit className='cart-icon'/>
                    <h3>Git</h3>
                </div>
                <div className="cart">
                    <FaGithub className='cart-icon'/>
                    <h3>Githup</h3>
                </div>
                <div className="cart">
                    <PiFileCppBold className='cart-icon'/>
                    <h3>C++</h3>
                </div>
                </div>


            </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
