import ToggleBox from "../components/ToggleBox"
import NavScreen from "../components/NavScreen"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Home = ({isNavOpen, setIsNavOpen}: {isNavOpen: boolean, setIsNavOpen: (value: boolean)=>void}) => {
  useGSAP(()=>{
    gsap.to('.overlay_group', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1
    })
  },[])
  return (
    <main className='relative h-dvh bg-black flex items-center justify-center overflow-y-hidden'>
      <div className="absolute inset-0 z-100 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
      </div>
    <ToggleBox isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
    { isNavOpen ? 
        <NavScreen setIsNavOpen={setIsNavOpen}/> :  
        <h2 className="text-white">WE’RE SO GOOD AT WHAT WE DO</h2>
    }
   </main>
  )
}
export default Home