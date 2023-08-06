import React , {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import decode from 'jwt-decode'
import logo  from '../../Assets/logo.svg'
import Search from '../../Assets/search.svg'
import Avatar from '../Avatar/Avatar'
// import { Button } from '../Button/Button'
import './Navbar.css';
import { setCurrentUser } from '../../actions/currentUser'
// import AllRoutes from '../../AllRoutes'
const Navbar = () => {
  const dispatch = useDispatch()
  var User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()
  const handleLogout = () =>{
    dispatch({type: 'LOGOUT'})
    navigate('/')
    dispatch(setCurrentUser(null))
  }
  useEffect (() => {
    const token = User?.token 
    if(token) {
      const decodedToken = decode(token)
      if(decodedToken.exp *1000 < new Date().getTime()){
        handleLogout()
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
  },[dispatch])

  return (
      <nav className='main-nav'>
        <div className='navbar'>
            <Link to ='/' className='nav-item nav-logo'>
                <img src={logo} alt='logo' height={30} width={150}/>
            </Link>
            <Link to = '/' className='nav-item nav-btn'>About</Link>
            <Link to = '/' className='nav-item nav-btn'>Products</Link>
            <Link to = '/' className='nav-item nav-btn'>For Teams</Link>
            <form>
              <input type="text" placeholder='Serach...'/>
              <img src={Search} alt='search' className='search-icon' width={18}/>
            </form>
            {
              User === null ?
            <Link to='/Auth' className='nav-item nav-links'>Log in</Link>:
            <>
           <Avatar backgroundColor= "#009DFF" px = "10px" py = "7px" borderRadius="50%" color='white' ><Link to= {`/Users/${User.result?._id}`} style={{color: "white" , textDecoration: 'none'}} >{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
            <button className='nav-item nav-links' onClick = {handleLogout}>Log out</button>
            </>
            }
        </div>
      </nav>

  )
}

export default Navbar