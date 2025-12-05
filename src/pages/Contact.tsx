import NavScreen from "../components/NavScreen"
import ToggleBox from "../components/ToggleBox"

const Contact = ({isNavOpen, setIsNavOpen}: {isNavOpen: boolean, setIsNavOpen: (value: boolean)=>void}) => {
    return (
    <main className='relative h-dvh bg-black flex items-center justify-center'>
    <ToggleBox isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
    { isNavOpen ? 
        <NavScreen setIsNavOpen={setIsNavOpen}/> :  
        <h2 className="text-white">OMO</h2>
    }
   </main>
  )
}
export default Contact