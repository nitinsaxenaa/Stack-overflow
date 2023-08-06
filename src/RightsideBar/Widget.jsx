import React from 'react'
const Widget = () => {
  const tags = ['Express ' , 'Firebase ' , 'html ', 'Java Script ' , 'Angular ' , 'Assembley' , 'Byte' ,'C ','C++ ' ,'React']
  return (
    <div className='widget-tags'>
    <h4>Watched Tags</h4>
    <div className='widget-tags-div'>
      {
        tags.map((tag) => (
          <p key={tag}>{tag }</p>
        ))
      }
    </div>
        
    </div>
  )
}

export default Widget