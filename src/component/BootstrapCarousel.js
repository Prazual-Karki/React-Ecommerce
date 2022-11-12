import React from 'react'
import {Carousel} from 'react-bootstrap'

export default function BootstrapCarousel() {
  return (
    <div><br/><br/><br/>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../carouselPhoto/samsung.jpg")}
              alt="First slide" height="450px" width="400px"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={require("../carouselPhoto/fashion.jpg")}
              alt="Second slide" height="450px" width="400px"
            /> 
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={require("../carouselPhoto/furniture.jpg")}
              alt="Third slide" height="450px" width="400px"
            />  
          </Carousel.Item>


        </Carousel>
    </div>
  )
}
