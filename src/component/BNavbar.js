import React,{useState} from 'react'
// import {render} from 'react-dom'
import {Navbar,Form,FormControl,Button,Container,Nav,Badge} from 'react-bootstrap'
import pklogo from '../photos/newpk.jpg'
import cartlogo from '../photos/cartlogo.png'
import Login from '../component/Login'


// #385feb

export default function BNavbar(props) {
    
    const [isHovering, setIsHovering] = useState(false);
    
    const handleMouseOver = (e) => {
        setIsHovering(true);
        
        
    };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
    
      <Navbar fixed="top" expand="lg" style={{backgroundColor:'#6b7ee8'}}>
        <Container fluid>
            <Navbar.Brand href="#" style={{marginRight:'17%'}}
            onMouseEnter={(e) => {
                e.target.style.color = 'blue';  
            }}
            onMouseLeave={(e) => {
                e.target.style.color = 'black';  
            }} >
            <img src={pklogo} alt="logo" width="60" height="50" style={{borderRadius: '50%'}}/>
                <b>PK-MART</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            
             <Form className="d-flex" >
                <FormControl
                type="search"
                placeholder="Search any brands/products.."
                className="me-2"
                aria-label="Search"
                style={{
                    width:'350px',
                    height:'43px',
                    borderRadius: '20px' ,
                    
        }}
                />
                <Button variant="outline-dark" style={{marginRight:'100px',height:'50px'}}>Search</Button>
            </Form>
           
            <Nav.Link onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} 
            style={{marginRight:'100px',color:'black'}}
            
            
            ><Button variant="outline-dark" style={{width:'125px',borderRadius: '10px',border:'2px solid'}}><b>Log in</b></Button>
           
            </Nav.Link>

            <Nav.Link 
            onMouseEnter={(e) => {
                e.target.style.color = 'blue';  
            }}
            onMouseLeave={(e) => {
                e.target.style.color = 'black';  
            }} >
            <img src={cartlogo} alt="cart" width="32" height="32"/>
            {props.cartItem ?(<Badge bg="primary">{props.cartItem}</Badge>):
             ('')
            }
            
            
            </Nav.Link>   
            
            </Nav>
           
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
            
        
        
    </div>
  )
}
