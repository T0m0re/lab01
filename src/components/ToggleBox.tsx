
const ToggleBox = ({setIsNavOpen} : {setIsNavOpen: (value: boolean) => void} ) => {
    

  return (
    <nav className="absolute top-0 w-full">
        <div className="flex items-center justify-between ">
            <h3 className="text-3xl ml-5 text-white">LAB I</h3>
              <div className="group relative z-2 bg-white flex flex-col items-center justify-center cursor-pointer w-40 h-30 overflow-hidden" onClick={()=>setIsNavOpen(true)}>
                <div className="absolute inset-0 bg-[#E4572E] z-1 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-300"></div>
                <div className="z-2 self-end">
                  <svg className="text-black" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="none" stroke="#020202" stroke-linecap="round" stroke-width="1.5" d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"/></svg>
                </div>
                <h3 className="z-2 text-xl ml-4">Menu</h3>
              </div>
        </div>
    </nav>
  )
}
export default ToggleBox