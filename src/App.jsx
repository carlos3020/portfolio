import { Routes, Route, useLocation } from "react-router-dom"
import Layout from './components/Layout'
import Work from './components/Work'
import Contributions from './components/Contributions'
import Skills from './components/Skills'
import Nav from './components/Nav'
import Header from './components/Header'
import { AnimatePresence,  } from 'framer-motion'


function App() {

  const location = useLocation()

  return (
    <>
      
      <Nav />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Layout />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
