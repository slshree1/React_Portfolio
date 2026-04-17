// import logo from './logo.svg';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Login from './components/Login';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { AnimatePresence } from 'framer-motion';
import Projects from './components/Projects';
import Education from './components/Education';
import Management from './components/Management';
import Certifications from './components/Certifications';
function AnimatedRoutes(){

   

    return(
        <AnimatePresence>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/About' element={<About />} />
                <Route path='/Skills' element={<Skills />} />
                <Route path='/Experience' element={<Experience />} />
                <Route path='/Projects' element={<Projects />} />
                <Route path='/Education' element={<Education />} />
                <Route path='/Certifications' element={<Certifications />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/Management' element={<Management/>}/>
            </Routes>
        </AnimatePresence>
    );
}



function App() {
  return (
    <div>
      <Router>  {/* Remove basename='React_Portfolio' */}
        <Navbar />
        <div className='mainContent'>
          <AnimatedRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
