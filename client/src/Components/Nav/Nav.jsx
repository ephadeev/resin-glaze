import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper">

                <NavLink to='/'>
                    <span>Home</span>
                </NavLink>
                <NavLink to='/search'>
                    <span>Search</span>
                </NavLink>
                <NavLink to='/cart'>
                    <span>Cart</span>
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;