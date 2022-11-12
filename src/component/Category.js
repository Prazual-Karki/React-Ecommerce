import React from 'react'
import CategoryCss from './Category.module.css'
import offer from '../photos/offer.png'
import men from '../photos/men.png'
import electronics from '../photos/electronics.png'
import women from '../photos/women.png'
import jewellery from '../photos/jewellery.jpg';
import {Link} from "react-router-dom";
import Men from  './Men';
import Women from  './Women';
import Jewelery from  './Jewelery';
import Electronics from  './Electronics';
import TopDeals from './TopDeals';





export default function Category() {
    
  return (
    <div><hr/>
      
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#dfe9f7'}}>
            <div className="container-fluid">   
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav justify-content-between w-100">
                    <li className="nav-item px-4" >
                    <Link to="/TopDeals" className="nav-link active"  
                    onMouseEnter={(e) => {
                        e.target.style.color = 'blue';  
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = 'black';  
                    }} >
                    <img src={offer} alt="logo" width="45" height="45"/>&nbsp;
                    See all products</Link>
                    </li>

                    <li className="nav-item px-4">
                    <Link to="/Men" className="nav-link active"   
                    onMouseEnter={(e) => {
                        e.target.style.color = 'blue';  
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = 'black';  
                    }} >
                    <img src={men} alt="logo" width="45" height="45"/>&nbsp;
                    Men's clothing</Link>
                    </li>
                    
                    <li className="nav-item px-4">
                    <Link to="/Women" className="nav-link active"  
                    onMouseEnter={(e) => {
                        e.target.style.color = 'blue';  
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = 'black';  
                    }} >
                    <img src={women} alt="logo" width="45" height="45"/>&nbsp;
                    Women's clothing</Link>
                    </li>

                    <li className="nav-item px-4">
                    <Link to="Jewelery" className="nav-link active" 
                    onMouseEnter={(e) => {
                        e.target.style.color = 'blue';  
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = 'black';  
                    }} >
                    <img src={jewellery} alt="logo" width="45" height="45"/>&nbsp;
                    Jewellery</Link>
                    </li>

                    <li className="nav-item px-4">
                    <Link to="/Electronics" className="nav-link active"  
                    onMouseEnter={(e) => {
                        e.target.style.color = 'blue';  
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.color = 'black';  
                    }} >
                    <img src={electronics} alt="logo" width="45" height="45"/>&nbsp;
                    Electronics</Link>
                    </li>

                
                   
                </ul>
                
                </div>
            </div>
            </nav>

            

    </div>
  )
}
