import Navbar from "./Navbar"
import Typewriter from "./Typewriter"
import Text from "./Text"
import './App.css'
import Images from "./Images"
import Perks from "./Perks"
import Mid from "./Mid"
import Coach from "./Coach"
import Footer from "./Footer"
import Features from "./Features"

function App() {

  return (
    <div className="bg-[#171717]">
      <Navbar/>
      <Typewriter/>
      <Text/>
      <Images/>
      <Perks/>
      <Mid/>
      <Features/>
      <Coach/>
      <Footer/>
    </div>
  )
}

export default App
