import React from 'react';
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFileLines  } from "react-icons/fa6";
import { GoProject } from "react-icons/go";
import { MdContactPhone } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdMenuOpen } from "react-icons/md";

const Navbar = ({dark , isdark}) => {
  function click (){
    document.querySelector(".navs").classList.toggle("open")
  }
  function close(){
    document.querySelector(".navs").classList.remove("open")
  }
  return (
    <>
    <div className='navbar'>
    <div className="nav-name">
          <h2 className='myname'>Rohaym</h2>
        </div>
      <div className="navs">
        
        <div className="nav main">
            <AiOutlineHome className='icon'/>
            <Link to={"/"} onClick={close}>Home</Link>
        </div>
        <div className="nav">
            <FaRegFileLines className='icon'/>
            <Link to={"/resume"} onClick={close}>Resume</Link>
        </div>
        <div className="nav">
            <GoProject className='icon'/>
            <Link to={"/project"} onClick={close}>Projects</Link>
        </div>
        <div className="nav">
            <MdContactPhone className='icon'/>
            <Link to={"/contact"} onClick={close}>Contact</Link>
        </div>
        <div className="switch" onClick={isdark}>
        <label for="theme" class="theme">
	<span class="theme__toggle-wrap">
		<input id="theme" class="theme__toggle" type="checkbox" role="switch" name="theme" value="dark"/>
		<span class="theme__fill"></span>
		<span class="theme__icon">
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
			<span class="theme__icon-part"></span>
		</span>
	</span>
</label>
        </div>
      </div>
      <div className="menu">
            <MdMenuOpen className='menu-icon' onClick={click}/>
        </div>
    </div>
    
    </>
  );
}

export default Navbar;
