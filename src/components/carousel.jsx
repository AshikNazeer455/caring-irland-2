import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/doctor-s-hands-tending-patient.jpg'
import image2 from '../images/team-young-specialist-doctors-standing-corridor-hospital.jpg'
import image3 from '../images/nurse.png'
import './carousel.css'
import React, { useEffect, useRef } from 'react';

function UncontrolledExample() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      carouselRef.current.next();
    }, 8000); // Adjust the interval duration (in milliseconds) as per your requirement

    return () => {
      clearInterval(interval);
    };
  }, []);
  
  
  
  return (
    <Carousel  ref={carouselRef} className='carousel-container'>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <div className='carsousel-header' >
          <h3>Welcome to</h3><br /><br />
          <h1>Caring Ireland Recruitment </h1>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <div className='carousel-header2' >
          <h1>We care for you <br />
          inside and out!</h1>

          
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

      
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;