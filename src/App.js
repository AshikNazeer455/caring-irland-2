import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/home/Home'

import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Gallery from './pages/gallery/Gallery'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import News from './pages/news/News.jsx'
import About from './pages/about/About.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/><br/><br/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        

      </Routes>
    

    </BrowserRouter>
  )
}

export default App