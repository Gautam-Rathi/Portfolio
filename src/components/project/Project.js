import React, { useEffect, useState } from 'react';
import './project.css';
import { project } from '../../projectdata';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Project = () => {
  const [page, setPage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      return (setPage(true))
    }, 1000)

  }, [])
  return (
    <div className="project">
      {page ? <>
        <h1>PROJECTS</h1>
        <Divider style={{ width: "100%" }} />
        <img src={project[0].img[0]} alt='projectimg' />
        <div className="project-details">
          <h1>{project[0].name}</h1>
          <h3>Frontend Skills - {project[0].front_skill.map((e) => { return (e + "|") })}</h3>
          <h3>Backend Skills - {project[0].back_skill.map((e) => { return (e + "|") })}</h3>
          <h3>{project[0].summary}</h3>
          <NavLink to={project[0].visit_link} className="btn">View Project</NavLink>
          <NavLink to={project[0].code_link} className="btn">View GitHub Code(Frontend)</NavLink>
          <NavLink to={project[0].back_code_link} className="btn">View GitHub Code(Backend)</NavLink>
        </div>
      </> : <Box className="boxanimation" sx={{ width: '100%' }}>
        <LinearProgress />
        <SkeletonTheme baseColor="lightblue" highlightColor="#9f5bf2">
          <div className="headprojele">
            <Skeleton className='skeleheadproj' />
          </div>
          <Divider className='skeledivid' />
          <div className="imgprojele">
            <Skeleton className='skeleimgproj' />
          </div>
          <div className="boxprojdetail">
          <div className="projdetail">
            <div className="headprojdetailele">
              <Skeleton className='skeleheadprojdetail' />
            </div>
            <div className="detailprojeletitle1">
              <Skeleton className='skeledetailprojeletitle1' />
            </div>
            <div className="detailprojeletitle2">
              <Skeleton className='skeledetailprojeletitle2' />
            </div>
            <div className="detailprojeletitle3">
              <Skeleton count={3} className='skeledetailprojeletitle3' />
            </div>
            <div className="detailbtn">
              <Skeleton className="detailbtn1" />
              <Skeleton className="detailbtn2" />
              <Skeleton className="detailbtn3" />
            </div>
          </div>
          </div>


        </SkeletonTheme>
      </Box>}
    </div>
  );
};

export default Project;
