
import './App.css';
import BootstarpCarousel from './component/BootstrapCarousel';
import Category from './component/Category';
import BNavbar from './component/BNavbar';
import TopDeals from './component/TopDeals';
import Footer from './component/Footer';
import Men from  './component/Men';
import Women from  './component/Women';
import Jewelery from  './component/Jewelery';
import Electronics from  './component/Electronics';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';



function App(props) {
  const [cartItem, setcartItem] = useState(0);
  const addCart = () => {
    // Update state with incremented value
    setcartItem(cartItem + 1);
  };
  
  return (
    <div className="App">
      <BNavbar cartItem={cartItem}/>
      
      
      <BootstarpCarousel/>
      
      <Router>
        
              <Category/>
        
          <Routes>
              <Route path="/TopDeals" element={<TopDeals addCart={addCart}/>} />
              <Route path="/Men" element={<Men addCart={addCart}/>}/>
              
              
              <Route path="/Women" element={<Women addCart={addCart}/>}/>
              
             
              <Route path="/Jewelery" element={<Jewelery addCart={addCart}/>}/>
              
              
              <Route path="/Electronics" element={<Electronics addCart={addCart}/>}/>
              
              
             
            </Routes>
      </Router>
      
      
      <Footer/>
      
      
    
    </div>
  );
}

export default App;
