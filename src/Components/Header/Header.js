import React from 'react';
import Css from './Header.css';
import image from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className="header">
            
                <img src={image} alt="volunteer Network"/>
            
                <nav>
                    <a href="/home">Home</a>
                    <a href="/donation">Donation</a>
                    <Link to='/events'>Events</Link>  
                    <a href="/blog">Blog</a>
                    <button class="btn btn-primary">Register</button>
                    <button class="btn btn-secondary">Admin</button>
                </nav>
            <div className="search">
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                <input type="text" placeholder="Search"/>
                <button class="btn btn-primary">Search</button>
            </div>
        </div>
    );
};

export default Header;