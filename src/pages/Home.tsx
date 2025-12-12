import ToggleBox from "../components/ToggleBox"
import NavScreen from "../components/NavScreen"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useState } from "react"
import { SplitText } from "gsap/all"


const Home = ({isNavOpen, setIsNavOpen}: {isNavOpen: boolean, setIsNavOpen: (value: boolean)=>void}) => {

  const [renderNav, setRenderNav] = useState(false);
  useGSAP(()=>{

    const textSplit = new SplitText('.h2_text', {type: 'lines'})
    gsap.to('.home-overlay_group', {
      yPercent: 100,
      duration: 0.6,
      stagger: 0.1,
      z: 0,
    });

    gsap.fromTo(textSplit.lines, {
      yPercent: 50,
      opacity: 0,
      duration: 300,
      
    }, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.1,
      backgroundColor: '',
      backdropFilter: 'blur(10px)'
    })
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
      <div className="home_grid_box absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))]">
        <div className="home-overlay_group bg-yellow-300 h-dvh z-5"></div>
        <div className="home-overlay_group bg-yellow-300 h-dvh z-5"></div>
        <div className="home-overlay_group bg-yellow-300 h-dvh z-5"></div>
        <div className="home-overlay_group bg-yellow-300 h-dvh z-5"></div>
        <div className="home-overlay_group bg-yellow-300 h-dvh z-5"></div>
      </div>
      {!isNavOpen && (
        <ToggleBox setIsNavOpen={openNav} />
      )}
      {renderNav && (
        <NavScreen isClosing={!isNavOpen} onClose={closeNav}/>
      )}
      {!renderNav && (
        <h2 className="h2_text text-white text-8xl font-bold text-center">WE’RE SO GOOD AT WHAT WE DO</h2>
      )}
   </main>
  )
}
export default Home