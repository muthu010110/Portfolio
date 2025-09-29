import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="portfolio-root">
      <Header />
     <Hero/>
     <About/>
     <Skills/>
     <Project/>
     <Contact/>
     <Footer/>
    

  
    </div>
  );
}
