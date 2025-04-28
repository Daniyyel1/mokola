
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Main from './components/layout/Main'
import Community from './components/pages/Community'
import Contact from './components/pages/Contact'
import Support from './components/pages/Support'
import Speech from './components/SubPages/Speech'
import Festival from './components/SubPages/Festival'
import Intervention from './components/SubPages/Intervention'
import Conferences from './components/SubPages/Conferences'
import Seminars from './components/SubPages/Seminars'
import ScrollTop from './components/SubPages/ScrollTop'

function App() {

  return (
    <>
    <ScrollTop />
      <Routes>
         <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/support' element={<Support />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/speech' element={<Speech />} />
          <Route path='/festival'element={<Festival />} />
          <Route path='/intervention' element={<Intervention />} />
          <Route path='/conference' element={<Conferences />} />
          <Route path='/seminar' element={<Seminars />} />
         </Route> 
      </Routes>
    </>
  )
}

export default App
