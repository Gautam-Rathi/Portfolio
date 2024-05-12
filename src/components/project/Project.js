import React,{useEffect,useState} from 'react';
import './project.css'; 
import { project } from '../../projectdata';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Project = () => {
  const [page,setPage] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      return(setPage(true))
    },500)

  },[])
  return (
    <div className="project">
        {page?<>
        <h1>PROJECTS</h1>
        <Divider/>
      <img src={project[0].img[0]} alt='projectimg' />
      <div className="project-details">
        <h1>{project[0].name}</h1>
        <h3>Frontend Skills - {project[0].front_skill.map((e)=>{return(e+" ,")})}</h3>
        <h3>Backend Skills - {project[0].back_skill.map((e)=>{return(e+" ,")})}</h3>
        <h3>{project[0].summary}</h3>
        <NavLink to={project[0].visit_link} className="btn">View Project</NavLink>
        <NavLink to={project[0].code_link} className="btn">View GitHub Code(Frontend)</NavLink>
        <NavLink to={project[0].back_code_link} className="btn">View GitHub Code(Backend)</NavLink>
      </div>
        </>:<Box className="boxanimation" sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}
    </div>
  );
};

export default Project;
