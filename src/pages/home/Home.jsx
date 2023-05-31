import React from 'react'
import'./home.css'
import UncontrolledExample from '../../components/carousel'
import {Serviceour} from '../../components/Serviceour'
import Aboutcontainer from '../../Ui/about'
import { Footer } from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <UncontrolledExample/>
      <Serviceour/>
      <Aboutcontainer/>
      <Footer/>
    </div>
  )
}

export default Home