import React from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

const Home = ()=>{
    return(
       <div className='home_cont'>
        <h1>Welcome To Our Website</h1>
        <div className='welcome_cont'>
           <Link to='/employee' ><button>See Employ list</button></Link>
           <Link to='/add' ><button>Create Employ list</button></Link>
        </div>
       </div>
    )
}
export default Home;