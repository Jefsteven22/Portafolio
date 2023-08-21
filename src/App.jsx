
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import BriefcasePage from './Pages/BriefcasePage'
import SkillPage from './Pages/SkillPage'
import ContactPage from './Pages/ContactPage'
import NavBar from './shared/NavBar'
import NotFount404 from './Pages/NotFount404'
import ParticlesBg from './shared/ParticlesBg'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/briefcase' element={<BriefcasePage />} />
        <Route path='/skill' element={<SkillPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFount404 />} />
      </Routes>
      <ParticlesBg />
    </div>
  )
}

export default App
