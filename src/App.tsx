
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { useState } from "react"

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <BrowserRouter>
   <Routes>
        <Route path="/" element={<Home isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>} />
        <Route path="/about" element={<About isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>} />
        <Route path="/contact" element={<Contact isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
