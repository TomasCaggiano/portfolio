import { useState } from 'react';
import './App.css';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {
  return (  <div className='app'> 
    <NavBar/>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
</div>

  )
}

export default App
