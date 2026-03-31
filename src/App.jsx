
import './App.css'
import Banner from './Components/Banner';
import Details from './Components/Details';
import NavBar from './Components/NavBar';
import PricingCard from './Components/PricingCard';
import ToolCard from './Components/ToolCard';

function App() {
 
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Details></Details>
      <ToolCard/>
      <PricingCard></PricingCard>
    </>
  )
}

export default App
