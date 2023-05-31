import './navbar.css'
import { Link,NavLink } from 'react-router-dom'
import image from '../images/logo.jpg'
import {links} from '../data'
import {GoGrabber} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'

const Navbar = () => {
  const[isnavShowing, setIsNavShowing]=useState(false);
  
  return (
    <nav>
    <div className='logo d-flex justify-content-start'>
      <Link to="/" >
        <img  style={{height:"7rem"}}src={image} alt="logo" />
      </Link>
      </div>
    <div className='nav__container'>
    
      <ul className={` nav__links ${isnavShowing ?'show__nav':'hide__nav'}`}>
        {
          links.map(({name,path},index)=>{
            return(
              <li key={index}>
                <NavLink to={path} >{name} </NavLink>
              </li>
            )
          })
        }
      </ul>
      <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(!isnavShowing)}>
        {
          isnavShowing ?<MdOutlineClose/>:<GoGrabber/>
        }
        
      </button>
    </div>
    </nav>
  )
}

export default Navbar