import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import home from './home_logo.avif';


const Navbar = () =>{
    return (
        <div className="navbar">
           <Link to='/'><img className="company_logo" src={home} alt="Company_Logo" /> </Link> 
           <ul className="navbar-ul">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/add'>Create</Link></li>
            <li><Link to='/login'>Login</Link></li>
           </ul>
        </div>
    )
}

export default Navbar;