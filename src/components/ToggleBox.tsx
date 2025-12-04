
const ToggleBox = ({isNavOpen, setIsNavOpen} : {isNavOpen: boolean; setIsNavOpen: (value: boolean) => void} ) => {
    
  return (
    <>
    <nav className="absolute top-0 w-full z-100">
        <div className="flex items-center justify-between">
            
          <> 
            <h3 className="text-3xl ml-5 text-red-600"> LAB 01</h3>
                
            <div className="group relative bg-red-500 flex flex-col items-stretch justify-center cursor-pointer w-40 h-30 overflow-hidden border border-black" onClick={()=>setIsNavOpen(!isNavOpen)}>
              {isNavOpen ? 
              <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 32 32"><path fill="none" stroke="#020202" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 30L30 2m0 28L2 2"/></svg>
                  <h1>hhhhhhhhhhhhhhh</h1>
              </>
            :
              <>
                <div className="absolute inset-0 bg-red-400 z-1 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-300"></div>
                <div className="z-2 self-end">
                  <svg className="text-black" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="none" stroke="#020202" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
                </div>
                <h3 className="z-2 text-xl ml-4">Menu</h3>
              </>
            }
            </div>
          </> 
            
        </div>
    </nav>
    </>
  )
}
export default ToggleBox