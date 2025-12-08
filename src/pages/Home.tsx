import ToggleBox from "../components/ToggleBox"
import NavScreen from "../components/NavScreen"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"


const Home = ({isNavOpen, setIsNavOpen}: {isNavOpen: boolean, setIsNavOpen: (value: boolean)=>void}) => {

  const [renderNav, setRenderNav] = useState(false);
  useGSAP(()=>{
    gsap.to('.home-overlay_group', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1
    });
  })

  const openNav = () => {
    setRenderNav(true);
    setIsNavOpen(true);
  };

    const closeNav = () => {
    setIsNavOpen(false)
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setRenderNav(false);
    }, 1000)
  };
  return (
    <main className='relative h-dvh bg-black flex items-center justify-center overflow-y-hidden'>
      <div className="home_grid_box absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        <div className="home-overlay_group bg-yellow-300 h-dvh"></div>
        <div className="home-overlay_group bg-yellow-300 h-dvh"></div>
        <div className="home-overlay_group bg-yellow-300 h-dvh"></div>
        <div className="home-overlay_group bg-yellow-300 h-dvh"></div>
        <div className="home-overlay_group bg-yellow-300 h-dvh"></div>
      </div>
    <ToggleBox isNavOpen={isNavOpen} setIsNavOpen={openNav} />

    {renderNav && (
      <NavScreen isClosing={!isNavOpen} onClose={closeNav}/>
    )}

    {!renderNav && (
      <h2 className="text-white text-8xl font-bold text-center">WE’RE SO GOOD AT WHAT WE DO</h2>
    )}
    {/* { isNavOpen ? 
        <NavScreen setIsNavOpen={setIsNavOpen}/> :  
        <h2 className="text-white">WE’RE SO GOOD AT WHAT WE DO</h2>
    } */}
   </main>
  )
}
export default Home