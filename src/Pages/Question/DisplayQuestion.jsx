import React from 'react'
import LeftsideBar from '../../components/LeftsideBar/LeftsideBar'
import RightsideBar from '../../RightsideBar/RightsideBar'
import QuestionDetails from './QuestionDetails'
const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
    <LeftsideBar/>
    <div className='home-container-2'>
    <QuestionDetails/>
    </div>
    <RightsideBar/>
    </div>
  )
}

export default DisplayQuestion