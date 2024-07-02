import './App.css';
import Nav from './components/nav/Nav';
import {Route, Routes} from "react-router-dom"
import Home from './components/intro/Home';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skill';
import Project from './components/project/Project';
import ContactForm from "./components/contact/ContactForm";



function App() {
  
  return (
    <div className='topmost'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/skill' element={<Skills />} />
      <Route path='/projects' element={<Project />} />
      <Route path='/contact' element={<ContactForm />} />


    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
