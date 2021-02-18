import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    document.addEventListener('DOMContentLoaded', () => {
        let elems = document.querySelectorAll('.sidenav');
        let instances = window.M.Sidenav.init(elems);
    })
    return (
        <header className='header'>
            <nav>
                <div className="nav-wrapper">
                    <NavLink to='/' className='brand-logo center'>RESIN.GLAZE</NavLink>
                    <NavLink to='#' data-target='mobile-demo' className='sidenav-trigger'><i className='material-icons'>menu</i></NavLink>
                    <ul className='right hide-on-med-and-down'>
                        <li><NavLink to='/search'><i className='material-icons'>search</i></NavLink></li>
                        <li><NavLink to='/products'>Каталог</NavLink></li>
                        <li><NavLink to='/cart'><i className='material-icons'>shopping_cart</i></NavLink></li>
                    </ul>
                </div>
            </nav>
            <ul className='sidenav' id='mobile-demo'>
                <li><NavLink to='/search'>Поиск</NavLink></li>
                <li><NavLink to='/products'>Каталог</NavLink></li>
                <li><NavLink to='/cart'>Корзина</NavLink></li>
            </ul>
        </header>
    );
};

export default Header;