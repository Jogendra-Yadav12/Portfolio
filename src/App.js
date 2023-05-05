import React from 'react'
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Projects from './components/project/Projects';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';


function App() {
  return (
      <div>
        <Header/>
        <Nav/>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  );
}
export default App;