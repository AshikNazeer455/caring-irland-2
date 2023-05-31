import React from 'react'
import Aboutusheader from '../../components/aboutusheader'
import { Footer } from '../../components/Footer'
import image1 from '../../images/nurse.png'


const About = () => {
  return (
    <div>
      <Aboutusheader/>
      <div className='aboutus-content'>
          <h1 className='aboutus-header'>About Us</h1>
          <div className='aboutus-paragraph'>
            <p>Established in 2020, we are one of the leading nursing agencies in Ireland. We provide specialist recruitment services within the health care and community sectors. The agency’s Directors have extensive Medical and Nursing backgrounds, and are supported by highly experienced and professional team of managers and consultants. The company places Nurses and Carers in hospitals, nursing homes and healthcare facilities throughout Ireland. Our administration staff are always available to provide any assistance required. We maintain the highest standerds in providing an excellent service to both applicants and clients. Our agency strives to deliver what we promise, always keeping quality at the forefront of everything we do.</p>
            
          
</div>
        </div>
      
      
      <div className='container Our-mission'>
       
        <div className='our-mission-paragraph'>
          <h1>Our Mission</h1>

          <p>We have many years of experience in Overseas Recruitment with an office in India and Ireland. We have dedicated teams to support you every step of the way and provide only the highest standards. We are supported by very highly experienced and professional consultants and managers
</p>
        </div>
      </div>
      <div className='our-visson'>
        <div className='Our-visson-img'>
          <img src={image1}></img></div>
          <div className='Our-vission-content'>
          <h1>Our Vision</h1>
          <p>Our vision is to be the first choice for nurses and care workers seeking to join an agency and for the healthcare clients needing assistance with nursing and care staff recruitment services. We will remain current, vibrant and competitive by being knowledgeable, innovative and willing to embrace change, bound by a strong quality focus. We empathise with the constant recruitment and budgetary challenges faced by our clients in the healthcare sector and seek to work in direct partnership with them. Caring Hands Nursing Agency Ireland will provide cost effective solutions. We strive for continued growth and development.</p>
        </div>
      </div><br /><br />br

      <Footer/>
     </div>
  )
}

export default About