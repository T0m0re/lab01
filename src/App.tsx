import { useState } from "react"
import ToggleBox from "./components/ToggleBox"
import NavScreen from "./components/NavScreen"

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
   <main className='relative h-dvh bg-black flex items-center justify-center'>
    <ToggleBox isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
    { isNavOpen ? 
        <NavScreen/> :  
        <h2 className="text-white">WE’RE SO GOOD AT WHAT WE DO</h2>
    }
   </main>
  )
}

export default App
