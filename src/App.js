import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <div>
          <Header className="mb-10" />
          <main>
   
              <About />
              <Skills />
              <Experience />
              <Certificates />
              <Contact />
              <Footer />

          </main>

        </div>
    </div>
  );
};

export default App;