import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Card,Button,Col,Row} from 'react-bootstrap'


export default function Jewelery(props) {
    const [products,setProducts] = useState([]);

   async function getData(){
       const res = await axios.get("https://fakestoreapi.com/products/category/jewelery")
       setProducts(res.data)
   }
//    const cardOne = useRef();
   
   useEffect(()=>{
    getData();
   },[])


  
  return (
    <div id="jewelery">
        <div style={{backgroundColor:'#dfe9f7'}}>
        <hr/>
        <h2 style={{fontWeight:'bold'}}>  Jewelery Items</h2>
        <hr/>
        </div>
        
        <div >
            <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4" >
                {products.map((value) =>{
                    return (
                    <Col key={value.id} >
                        <Card  style={{ width: '20rem', height:"105%",margin:'2% 2% 4% 2%'}}>
                        <Card.Img  variant="top" src={value.image} height="200px" width="150px" />
                        <Card.Body>
                            <div className='container'>
                            <Card.Title>{value.title.slice(0,25).concat('....')}</Card.Title>
                            </div>
                            <Card.Text><b><u> Price: Rs.{value.price *10} </u></b></Card.Text>
                            
                            <div className="button" 
                            style={{position:'absolute',bottom:'0',marginBottom:'5%'}}>&nbsp;&nbsp;&nbsp;
                                <Button variant="outline-primary" style={{}} >Buy Now
                                </Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                                <Button variant="outline-success"  onClick={props.addCart}> Add to Cart
                                </Button>
                               
                            </div>
                            
                            
                        </Card.Body>
                        </Card>
                    </Col>
                    )
                })}
            </Row>
            </div>
        
        
        
    </div>
  )
}
