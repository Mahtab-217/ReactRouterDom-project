import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Student from './Students.jsx'
import Details from './Details.jsx'
import Schools from './Schools.jsx'
import SchoolDetails from './SchoolDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/student/:id' element={<Details/>}/>
      <Route path='maktab' element={<Schools/>}/>
      <Route path='maktab/:id' element={<SchoolDetails/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
