import React,{useEffect,useState} from 'react';
import './skill.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { frontskills,backskills,programmingskills } from './skilldata';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Skills = () => {

    const [page,setPage] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      return(setPage(true))
    },500)

  },[])
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        
        <>
            {page?<section className="skills"><div className="skills-container">
                <h1>SKILLS</h1>

                <Divider className='divi'/>

                <h2>Frontend Skills</h2>
                <Carousel  className='caro'
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                showDots={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container">
                    {
                        frontskills.map((e) => {
                            return (
                                <>
                                    <div className="skills-list">
                                        <div className="skill">
                                            <div className='skill_img'><img src={e.img} alt="" /></div>
                                            <h3>{e.name}</h3>
                                            <div className="skill-bar">
                                                <div className={`skill-level ${e.name}`} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </Carousel>

                <Divider className='divi'/>
                <h2>Backend Skills</h2>

                
            

                <Carousel className='caro'
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                showDots={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container">
                    {
                        backskills.map((e) => {
                            return (
                                <>
                                    <div className="skills-list">
                                        <div className="skill">
                                            <div className='skill_img'><img src={e.img} alt="" /></div>
                                            <h3>{e.name}</h3>
                                            <div className="skill-bar">
                                                <div className={`skill-level ${e.name}`} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </Carousel>

                <Divider className='divi'/>
                <h2>Programming Skills</h2>

                <Carousel className='caro'
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                showDots={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container">
                    {
                        programmingskills.map((e) => {
                            return (
                                <>
                                    <div className="skills-list">
                                        <div className="skill">
                                            <div className='skill_img'><img src={e.img} alt="" /></div>
                                            <h3>{e.name}</h3>
                                            <div className="skill-bar">
                                                <div className={`skill-level ${e.name}`} ></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </Carousel>
            </div></section>:<Box className="boxanimation" sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}
    </>
        
    );
};

export default Skills;
