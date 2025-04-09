import React from 'react'
import Banner from '../SubPages/Banner'
import { Slides } from '../Data'
import Introduction from '../SubPages/Introduction'

const Home = () => {
  return (
    <div>
        <Banner data={Slides} />
        <Introduction />
    </div>
  )
}

export default Home