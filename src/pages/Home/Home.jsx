import Hero from './Hero'
import Features from './Features'
import Products from './Products'
import About from './About'
import HowItWorks from './HowItWorks'
import Testimonial from './Testimonial'



const Home = () => {
  return (
    <div>
        <Hero/>        
        <Products/>
        <About/>        
        <HowItWorks/>
        <Testimonial/>
        <Features/>
    </div>
  )
}

export default Home