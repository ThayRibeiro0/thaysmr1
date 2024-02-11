import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Skills from './pages/skills/Skills'
import Portfolio from './pages/portifolio/Portfolio'
import Contact from './pages/contact/Contact'
import { SocialIcons } from './components/SocialIcons'
//teste


function App() {
  
  return (
    <BrowserRouter>
     <SocialIcons />
      <Navbar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/thaysmr1" element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
          
    </BrowserRouter>
  )
}

export default App
