import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const Home = () => {

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
    <section className="h-dvh flex items-center justify-center">
      <h2 className="h2_text max-w-6/7 md:max-w-5xl text-white lg:text-6xl text-4xl font-bold text-center uppercase">The absence of evidence is not the evidence of absence.</h2>

   </section>
  )
}
export default Home