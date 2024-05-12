import React from 'react';
import './project.css'; 
import { project } from '../../projectdata';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';

const Project = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="project">
        <h1>PROJECTS</h1>
        <Divider/>
      <img src={project[0].img[0]} alt={title} />
      <div className="project-details">
        <h1>{project[0].name}</h1>
        <h3>Frontend Skills - {project[0].front_skill.map((e)=>{return(e+" ,")})}</h3>
        <h3>Backend Skills - {project[0].back_skill.map((e)=>{return(e+" ,")})}</h3>
        <h3>{project[0].summary}</h3>
        <NavLink to={project[0].visit_link} className="btn">View Project</NavLink>
        <NavLink to={project[0].code_link} className="btn">View GitHub Code(Frontend)</NavLink>
        <NavLink to={project[0].back_code_link} className="btn">View GitHub Code(Backend)</NavLink>
      </div>
    </div>
  );
};

export default Project;
