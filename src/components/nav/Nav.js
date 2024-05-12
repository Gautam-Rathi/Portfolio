import React,{useState} from 'react';
import './nav.css'; 
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';



const Nav = () => {
    

    const [dropen, setDropen] = useState(false);

    
    
  return (
    <nav className="navbar">
        
      <div className="navbar-container">
        <div className="navbar-logo">
          <NavLink className="navlogo" to="/"> <img className='portlogo' src="./portlogo.png" alt="" /> </NavLink>
        </div>
        <ul className={dropen?"navbar-menu-active":"navbar-menu"}>
          <li><NavLink className="navmenu" onClick={()=>{setDropen(false)}} to="/">Home</NavLink></li>
          <li><NavLink className="navmenu" onClick={()=>{setDropen(false)}} to="/skill">Skills</NavLink></li>
          <li><NavLink className="navmenu" onClick={()=>{setDropen(false)}} to="/projects">Projects</NavLink></li>
          <li><NavLink className="navmenu" onClick={()=>{setDropen(false)}} to="/contact">Contact Me</NavLink></li>
        </ul>
        

        
                        <MenuIcon className='hamburger' onClick={()=>{setDropen(!dropen)}}/>
                    
      </div>
    </nav>
  );
};

export default Nav;
