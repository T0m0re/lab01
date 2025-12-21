import { useState } from "react";
import { Outlet } from "react-router-dom"
import ToggleBox from "./ToggleBox";
import NavScreen from "./NavScreen";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const MainLaout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [renderNav, setRenderNav] = useState(false);
  
  useGSAP(()=>{
    gsap.to('.home-overlay_group', {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.1
    });
  }, [])

  const openNav = () => {
    setRenderNav(true);
    setIsNavOpen(true);
  };

    const closeNav = () => {
    setIsNavOpen(false)
  
    setTimeout(() => {
      setRenderNav(false);
    }, 1000)
    
  };
  return (
    <main className="relative h-dvh bg-[#0C0C0C] flex items-center justify-center overflow-y-hidden">
      <div className="home_grid_box absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))]">
        <div className="home-overlay_group bg-[#FFC914] h-dvh z-6"></div>
        <div className="home-overlay_group bg-[#FFC914] h-dvh z-6"></div>
        <div className="home-overlay_group bg-[#FFC914] h-dvh z-6"></div>
        <div className="home-overlay_group bg-[#FFC914] h-dvh z-6"></div>
        <div className="home-overlay_group bg-[#FFC914] h-dvh z-6"></div>
      </div>

       {!isNavOpen && !renderNav && (
        <ToggleBox setIsNavOpen={openNav} />
      )}
      {renderNav && (
        <NavScreen isClosing={!isNavOpen} onClose={closeNav}/>
      )}
    

    {!renderNav && <Outlet/>}
    </main>
  )
}
export default MainLaout;