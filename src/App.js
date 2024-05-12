import './App.css';
import Nav from './components/nav/Nav';
import {Route, Routes} from "react-router-dom"
import Home from './components/intro/Home';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skill';
import Project from './components/project/Project';
import ContactForm from "./components/contact/ContactForm";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useEffect, useState } from 'react';

function App() {
  const [page,setPage] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      return(setPage(true))
    },500)

  },[])
  return (
    <div className='topmost'>
    <Nav/>
    {page?<Routes>
      <Route path='/' element={<Home />} />
      <Route path='/skill' element={<Skills />} />
      <Route path='/projects' element={<Project />} />
      <Route path='/contact' element={<ContactForm />} />


    </Routes>:<Box className="boxanimation" sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>}
    <Footer/>
    </div>
  );
}

export default App;
