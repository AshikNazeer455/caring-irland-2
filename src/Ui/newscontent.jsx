import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image from '../images/doctor-s-hands-tending-patient.jpg'
import image1 from '../images/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-sitting-desk-work-computer-with-medical-tools-holding-globe-her-thumb-up-isolation-yellow-background.jpg'
import image2 from '../images/service.jpg'
import {BsFillCalendar3WeekFill} from 'react-icons/bs'
const Newscontent = () => {
  return (
    <><div className='News-container'>
      <h1 className='content'>News</h1>
      <div className='Pargraph'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare tempus aliquet. Pellentesque
      finibus, est et iaculis suscipit, dolor nulla commodo dui, nec ultricies arcu nisl tristique eros. Morbi
      eros est, pulvinar eget ornare ac, ultrices eget risus. Ut lobortis pellentesque pretium.</p>
      </div>
    </div><CardGroup>
        <Card style={{marginRight:'1rem'}}>
          <Card.Img variant="top" src={image}/>
          <Card.Body>

            <Card.Text>
            Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Etiam ornare tempus aliquet.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> February 20 2023 </small>
          </Card.Footer>
        </Card >
        <Card style={{marginRight:'1rem',marginLeft:'1rem'}}>
          <Card.Img variant="top" src={image1}/>
          <Card.Body>
            
            <Card.Text>
            Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Etiam ornare tempus aliquet. {' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted "><BsFillCalendar3WeekFill/> February 20 2023 </small>
          </Card.Footer>
        </Card>
        <Card style={{marginLeft:'1rem'}}>
          <Card.Img variant="top" src={image2}/>
          <Card.Body>
            <Card.Text>
            Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Etiam ornare tempus aliquet
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">February 20 2023</small>
          </Card.Footer>
        </Card>
      </CardGroup></>
  )
}

export default Newscontent