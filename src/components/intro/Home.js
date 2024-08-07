import React,{useEffect,useState} from 'react';
import './home.css'; 
import {data} from "../../portdata"
import { NavLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Home = () => {
  const [page,setPage] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      return(setPage(true))
    },1000)

  },[])
  return (
    <>
    {page?<section className="home">
      <div className="intro">
      <div className="home-container">
        <h2>Welcome to My Portfolio,</h2>
        <div className='socials'>
        <img className='namelogo' src="./namelogo.png" alt="" />
        <NavLink to="https://www.linkedin.com/in/gautam-rathi-432753308/"><LinkedInIcon style={{color:"blue"}}/></NavLink>
        <NavLink to="https://github.com/Gautam-Rathi"><GitHubIcon/></NavLink>
        <MailOutlineIcon onClick={()=>{return(toast.info("gautamrathicode@gmail.com"))}} style={{color:"red",cursor:"pointer"}}/>
        <LocalPhoneIcon onClick={()=>{return(toast.info("7289989372"))}} style={{color:"blue",cursor:"pointer"}}/>
        
        
        </div>
        
        <h1>Hi, I'm {data.name}, a {data.role}.</h1>
        <h2>I specialize in {data.specialist} and I'm passionate about bringing new ideas into reality.</h2>
        <NavLink to="/contact" className="btn">Hire Me</NavLink>
      </div>
      <div className="portimg">
        <img src="./portimg.png" alt="" />
      </div>
      </div></section>:<Box className="boxanimation" sx={{ width: '100%' }}>
      <LinearProgress />
      <SkeletonTheme baseColor="lightblue" highlightColor="#9f5bf2">
      <div className="loader">
      <div className="textloading">
      <Skeleton className='headload'/>
      <Skeleton className='logoload'/>
      <Skeleton className='titleload'/>
      <Skeleton className='descload'/>
      <Skeleton className='btnload'/>
      </div>
      <div className="imgloading">
        <Skeleton className='imgload'/>
      </div>
      </div>
      </SkeletonTheme>
    </Box>}
      <ToastContainer />
      </>
    
  );
};

export default Home;
