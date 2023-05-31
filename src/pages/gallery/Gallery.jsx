import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import { Footer } from '../../components/Footer';
import image1 from '../../images/about.png'
import image2 from '../../images/nurse.png'
import image3 from '../../images/retirement-home-concept-with-happy-people.jpg'
import image4 from '../../images/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-sitting-desk-work-computer-with-medical-tools-holding-globe-her-thumb-up-isolation-yellow-background.jpg'
import image5 from '../../images/team-young-specialist-doctors-standing-corridor-hospital.jpg'
export default function App() {
  return (
    <><MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img

          src={image1}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape' />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={image2}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds' />

        <img
          src={image3}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water' />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src={image4}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea' />

        <img
          src={image5}
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park' />
      </MDBCol>
    </MDBRow><Footer /></>
  );
}