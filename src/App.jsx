
import './App.css'
import Banner from './Components/Banner';
import Details from './Components/Details';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import PricingCard from './Components/PricingCard';
import ReadSection from './Components/ReadSection';
import ToolCard from './Components/ToolCard';

function App() {
 
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Details></Details>
      <ToolCard/>
      <PricingCard></PricingCard>
      <ReadSection></ReadSection>
      <Footer></Footer>
    </>
  )
}

export default App
