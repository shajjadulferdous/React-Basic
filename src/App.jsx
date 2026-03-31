
import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Banner';
import Details from './Components/Details';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import PricingCard from './Components/PricingCard';
import ReadSection from './Components/ReadSection';
import ToolCard from './Components/ToolCard';
import Model from './Components/Model';
import CardHeader from './Components/CardHeader';
import BuyCard from './Components/BuyCard';

const cartFetch = async() =>{
    const res = await fetch('/cartDetails.json');
    const ans  = res.json();
    return ans;
}
const cartPromise = cartFetch();
function App() {
  const [State , SetState] = useState(false)
  const [buyCard , setBuyCard] = useState([]);
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Details></Details>
      <CardHeader SetState = {SetState}></CardHeader>
      {
           State ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <BuyCard></BuyCard>
          </Suspense> : <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>        
           <Model cartPromise={cartPromise} ></Model>
          </Suspense>
      }
      <ToolCard/>
      <PricingCard></PricingCard>
      <ReadSection></ReadSection>
      <Footer></Footer>
    </>
  )
}

export default App
