import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NavScreen = ({isClosing,
   onClose
  }: {
    isClosing: boolean,
    onClose: ()=>void
  }) => {
  
useGSAP(()=>{
    gsap.to('.overlay_group', {
     yPercent: -100,
     duration: 0.6,
     stagger: 0.1
    })

    gsap.fromTo('.x-button', {
      opacity: 0,
      xPercent: 100
    }, {
      opacity: 1,
      xPercent: 0,
      duration: 1.2
    })
  })

  useEffect(() => {
    if (isClosing) {
      gsap.to('.oerlay_group', {
        yPercent: 0, // Slide down
        duration: 0.8,
        stagger: 0.1
      });
    }

    if(isClosing){
      gsap.fromTo('.overlay_group', {
        z: 1000,
      }, {
        yPercent: 0, // Slide down
        duration: 0.8,
        stagger: 0.1,
        z: 0
      })
    }
  }, [isClosing]);
  return (
    <nav className="relative w-full h-full bg-white overflow-y-hidden">
      <div  className="grid_box absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))]">
        <div className="overlay_group bg-black h-dvh z-5"></div>
        <div className="overlay_group bg-black h-dvh z-5"></div>
        <div className="overlay_group bg-black h-dvh z-5"></div>
        <div className="overlay_group bg-black h-dvh z-5"></div>
        <div className="overlay_group bg-black h-dvh z-5"></div>
      </div>
      <div className="absolute top-0 right-0 overflow-hidden p-2 ">
         <svg onClick={onClose} className="x-button hover:text-red-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 30L30 2m0 28L2 2"/></svg>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full z-5">
        <Link to="/" onClick={onClose} className="w-full">
        <div className="w-full flex items-center justify-center relative border-y group cursor-pointer overflow-y-hidden">
          <div className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-6 slide-track">
            <h1 className="uppercase text-8xl font-semibold text-nowrap">They are Known Known'</h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondock2.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
            <h1 className="uppercase text-8xl font-semibold text-nowrap">And also Unknown Unknown</h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondocks.jpg" alt="image"  className="object-cover rounded-2xl "/>
            </div>
            <h1 className="uppercase text-8xl font-semibold text-nowrap">They are Know Known</h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondock2.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
            <h1 className="uppercase text-8xl font-semibold text-nowrap">And also Unknown Unknown</h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondocks.jpg" alt="image"  className="object-cover rounded-2xl "/>
            </div>
            </div>
          </div>
          
            <h2 className="text-8xl text-center font-semibold py-[1vw] uppercase">Home</h2>
           </div>
          </Link>

        <Link to="/about" onClick={onClose} className="w-full">
        <div className="w-full flex items-center justify-center relative group cursor-pointer overflow-hidden">
           <div className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center overflow-x-hidden">
            <div className="flex items-center gap-6 slide-track">
            <h1 className="uppercase text-8xl font-semibold text-nowrap">Things we don't know'</h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondocks3.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
            <h1 className="uppercase text-8xl font-semibold text-nowrap">that we don't know</h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
            </div>
            <h1 className="uppercase text-8xl font-semibold text-nowrap">things we don't know </h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondocks3.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
            <h1 className="uppercase text-8xl font-semibold text-nowrap">that we don't know</h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
            </div>
            </div>
          </div>
                <h2 className="text-8xl font-semibold py-6 text-center uppercase">Projects</h2>
        </div>
          </Link>

          <Link to="/contact" onClick={onClose} className="w-full">
            <div className="w-full flex items-center justify-center relative border-y group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center overflow-x-hidden">
                <div className="flex items-center gap-6 slide-track">
         
              <h1 className="uppercase text-8xl font-semibold text-nowrap">What??</h1>
            <div className="w-23 h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
            </div>
            </div>
                
              </div>
              <h2 className="text-8xl font-semibold py-6 text-center uppercase">Contact</h2>
            </div>
          </Link>
        
      </div>
        
    </nav>
    
    
  )
}
export default NavScreen