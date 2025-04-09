
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Main from './components/layout/Main'
import Community from './components/pages/Community'
import Contact from './components/pages/Contact'
import Support from './components/pages/Support'
import Speech from './components/SubPages/Speech'

function App() {

  return (
    <>
      <Routes>
         <Route path='/' element={<Main />}>
          <Route index element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/support' element={<Support />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/speech' element={<Speech />} />
         </Route>
      </Routes>
    </>
  )
}

export default App
