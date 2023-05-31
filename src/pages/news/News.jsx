import React from 'react'
import Newsheader from '../../components/newsheader'
import Newscontent from '../../Ui/newscontent'
import { Footer } from '../../components/Footer'

const News = () => {
  return (
    <div >
      <Newsheader/>
      <Newscontent/><br /><br />
      <Footer/>
      
    </div>
  )
}

export default News