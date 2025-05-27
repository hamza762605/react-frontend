import './navbar.css';
import logo from '../assets/images/Combined-Shape.png';
import ellipse from '../assets/images/Ellipse 53.png';
import vector from '../assets/images/Vector.png';
import vector2 from '../assets/images/Vector (1).png';
import profile from '../assets/images/profile.jpg';
import { NavLink } from 'react-router-dom';
import React, { useContext } from 'react';
import { Context } from '../MyContext';

export default function Navbar() {
    const {user} = useContext(Context)

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt='Logo' />
            </div>
            <ul className='navbar-links'>
                <li><NavLink activeClassName="active" to="/">Explore</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><a href='#hotels'>Hotels</a></li>
                <li><a href='#offers'>Offers</a></li>
                <li>
                    <img src={ellipse} alt='Ellipse' className='ellipse' />
                    <img src={vector} alt='Vector' className='vector' />
                    <img src={vector2} alt='Vector 2' className='vector2' />
                </li>
                <li className='user-item'><img src={profile} alt='Profile' className='profile' />
                <span className='username'>{user.name}</span>
                </li>
            </ul>
        </nav>
    );
}