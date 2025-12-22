import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText";

const About = () => {
  useGSAP(()=>{
  const textSplit = new SplitText('.h2_text', {type: 'lines'})

  gsap.fromTo(textSplit.lines, {
      yPercent: 50,
      opacity: 0,
      filter: 'blur(15px)'
    }, {
      yPercent: 0,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1,
      stagger: 0.15,
    })
})
    return (
    <main className='relative h-dvh flex items-center justify-center'>
         <h2 className="h2_text max-w-6/7 md:max-w-4xl text-white lg:text-6xl text-4xl font-bold text-center uppercase">Simply because you don't have evidence that something doesn't exist...</h2>
   </main>
  )
}
export default About