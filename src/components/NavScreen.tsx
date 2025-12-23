import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const  links = [
  {title: "Home", link: "/"},
  {title: "Projects", link: "/about"},
  {title: "Contact", link: "/contact"},
 ]

const NavScreen = ({isClosing,
  onClose, onAnimationComplete
  }: {
    isClosing: boolean,
    onClose: ()=>void,
    onAnimationComplete: ()=>void
  }) => {
  
const linkContainerRefs = useRef<{[key: number]: HTMLDivElement}>({})
const linkOverflowRefs = useRef<{[key: number]: HTMLDivElement}>({})

const linkMouseEnterEvent = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
  const container = linkContainerRefs.current[index];
  const overflow = linkOverflowRefs.current[index];

  if (!container) return null;

  const linkContainerSpace = container.getBoundingClientRect()
  const midpoint = linkContainerSpace.height / 2;

  const y = e.clientY - linkContainerSpace.top;
  const from = y >= midpoint ? 100 : -100
  
    const initialPos = {
     y: from,
    };

    gsap.fromTo(overflow, 
      initialPos, {
      y: 0,
      duration: 0.4, 
      ease: 'power2.out'
    })
}

const linkMouseLeaveEvent = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
  const container = linkContainerRefs.current[index];
  const overflow = linkOverflowRefs.current[index];
   if (!container) return null;

  const linkContainerSpace = container.getBoundingClientRect()
  const containerHeight = linkContainerSpace.height
  const midpoint = linkContainerSpace.height / 2;

  const y = e.clientY - linkContainerSpace.top;
  const from = y >= midpoint ? containerHeight : -containerHeight

  gsap.to(overflow, 
 {
      y: from,
      duration: 0.4, 
      ease: 'power2.out'
    })
}

useGSAP(()=>{
    gsap.to('.overlay_group', {
     yPercent: 100,
     duration: 0.4,
     stagger: 0.1,
    })

    gsap.fromTo('.x-button', {
      opacity: 0,
      xPercent: 100
    }, {
      opacity: 1,
      xPercent: 0,
      duration: 1.2
    })

    gsap.fromTo('.title', {
      scaleY: -1
    }, {
      scaleY: 1,
      stagger: 0.1
    })
  })

  useEffect(() => {

    if(isClosing){

      gsap.to('.x-button', {
      opacity: 0,
      xPercent: 100
      })

      gsap.to('.overlay_group', 
      {
        yPercent: 0,
        duration: 0.4,
        stagger:{amount: 0.2, from: "end"},
        onComplete: () => {
          onAnimationComplete?.()
        }
      })
    }
  }, [isClosing, onAnimationComplete]);
  return (
    <nav className="relative w-full h-full bg-white overflow-y-hidden">
      <div  className="grid_box absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(20px,1fr))] pointer-events-none">
        <div className="overlay_group bg-black h-dvh z-5"></div>
        <div className="overlay_group bg-black h-dvh z-5"></div>
        <div className="overlay_group bg-black h-dvh z-5"></div>
        <div className="overlay_group bg-black h-dvh z-5"></div>
        <div className="overlay_group bg-black h-dvh z-5"></div>
      </div>
      <div className="absolute top-0 right-0 overflow-hidden p-2 ">
        <svg onClick={onClose} className="x-button hover:text-[#E4572E] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 30L30 2m0 28L2 2"/></svg>
      </div>
      <div className="[&>*:nth-child(odd)]:border-y absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full z-4">
      {links.map(({title, link}, index) => (
        <Link key={index} to={link} onClick={onClose} className="w-full title" onMouseEnter={(e) => linkMouseEnterEvent(e, index)} 
    onMouseLeave={(e) => linkMouseLeaveEvent(e, index)}>
        <div ref={el => {if (el) linkContainerRefs.current[index] = el}}  className="relative w-full flex items-center justify-center group cursor-pointer overflow-y-hidden">
          <div ref={el => {if (el) linkOverflowRefs.current[index] = el}}  className="absolute inset-0 bg-[#FFC914]  flex items-center justify-center translate-y-full overflow-hidden whitespace-nowrap">
            {index === 0 && (
                <div className="flex items-center gap-6 slide-track">
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">They are Known Known'</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                      <img src="/assets/boondock2.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">And also Unknown Unknown</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                      <img src="/assets/boondocks.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">They are Know Known</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                      <img src="/assets/boondock2.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">And also Unknown Unknown</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">They are Known Known'</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                      <img src="/assets/boondock2.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">And also Unknown Unknown</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                      <img src="/assets/boondocks.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">They are Know Known</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                      <img src="/assets/boondock2.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">And also Unknown Unknown</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks.jpg" alt="image"  className="object-cover rounded-2xl "/>
                </div>
            </div>
            )}
            {index === 1 && (
              <div className="flex items-center gap-6 slide-track">
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">Things we don't know'</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks3.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">that we don't know</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">things we don't know </h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks3.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">that we don't know</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">Things we don't know'</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks3.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">that we don't know</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">things we don't know </h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks3.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">that we don't know</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
            </div>
            )}
            { index === 2 && (
              <div className="flex items-center gap-6 slide-track">
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">What??.</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks5.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">Say What Again.</h1>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">Say What Again!!!!.</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks6.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">I dear you, i double dear you mdfk.</h1>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">Say what one more time..... what?</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">What??.</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks5.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">Say What Again.</h1>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">Say What Again!!!!.</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks6.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">I dear you, i double dear you mdfk.</h1>
                <h1 className="uppercase text-4xl lg:text-8xl font-semibold text-nowrap">Say what one more time..... what?</h1>
                <div className="lg:w-23 lg:h-5 flex items-center justify-center">
                  <img src="/assets/boondocks4.jpg" alt="image"  className="object-cover rounded-2xl w-full"/>
                </div>
              </div>
            )}
          </div>
            <h2 className="text-4xl lg:text-8xl text-center font-semibold py-[1vw] uppercase">{title}</h2>
           </div>
          </Link>
      ))}

      </div>
    </nav>
  )
}
export default NavScreen