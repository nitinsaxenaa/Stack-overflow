import React from 'react'
import './RightsideBar'
import Widget from './Widget'
import WidgetTags from './WidgetTags'
import './RightsideBar.css'
const RightsideBar = () => {
  return (
    <aside className='right-side-bar'>
      <WidgetTags/>
      <Widget/>
    </aside>
  )
}

export default RightsideBar