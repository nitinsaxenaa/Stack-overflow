import React from 'react'
import './LeftsideBar.css'
import {NavLink} from 'react-router-dom'  
import globe from '../../Assets/globe.svg';
const LeftsideBar = () => {
  return (
    <div className='left-sidebar'> 
    <nav className='side-nav'>
        <NavLink to= '/' className= 'side-nav-links' activeClassName = 'active'>
            <p>Home</p>
        </NavLink>
        <div className=' side-nav-div'>
        <div><p>PUBLIC</p></div>
            <NavLink to = '/Questions' className='side-nav-links' activeClassName = 'active'>
                <img src= {globe} alt='Globe'  style={{width : "30px"}}/>
                <p style={{padding: "10px"}}>Questions</p>
            </NavLink>
            <NavLink to = '/Tags' className='side-nav-links'
            style={{paddingLeft : "40px"}} activeClassName = 'active' >
                <p>Tags</p>
            </NavLink>
            <NavLink to = '/Users' className='side-nav-links' activeClassName = 'active' style={{paddingLeft : "40px"}}>
                <p>Users</p>
            </NavLink>
        </div>
    </nav>
    </div>

  )
}

export default LeftsideBar