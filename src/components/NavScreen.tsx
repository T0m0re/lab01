import { Link } from "react-router-dom";

const NavScreen = ({setIsNavOpen}: {setIsNavOpen: (value: boolean)=>void}) => {

  return (
    <nav className="relative w-full h-full bg-white ">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-1 z-201">
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
        <div className="overlay_group bg-yellow-300 h-dvh"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full z-300">
        <Link to="/" onClick={()=>setIsNavOpen(false)} className="w-full">
        <div className="w-full flex items-center justify-center relative border-y group cursor-pointer overflow-y-hidden">
          <div className="absolute inset-0 bg-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center overflow-x-hidden whitespace-nowrap">
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

        <Link to="/about" onClick={()=>setIsNavOpen(false)} className="w-full">
        <div className="w-full flex items-center justify-center relative group cursor-pointer overflow-y-hidden">
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

          <Link to="/contact" onClick={()=>setIsNavOpen(false)} className="w-full">
            <div className="w-full flex items-center justify-center relative border-y group cursor-pointer overflow-y-hidden">
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