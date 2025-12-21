import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const Home = () => {

useGSAP(()=>{
  const textSplit = new SplitText('.h2_text', {type: 'lines'})

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

  return (
    <section className="h-dvh flex items-center justify-center">
      <h2 className="h2_text max-w-6/7 md:max-w-4xl text-white text-7xl font-bold text-center">WE’RE SO GOOD AT WHAT WE DO</h2>
   </section>
  )
}
export default Home