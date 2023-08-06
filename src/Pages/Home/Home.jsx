import React from 'react'
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import HomemainBar from '../../components/HomemainBar/HomemainBar'
import RightsideBar from '../../RightsideBar/RightsideBar'
import '../../App.css';
const Home = () => {
  return (
    <div className='home-container-1'>
    <LeftsideBar/>
    <div className='home-container-2'>
    <HomemainBar/>
    </div>
    <RightsideBar/>
    </div>
  )
}

export default Home