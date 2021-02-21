import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({counter}) => {
    document.addEventListener('DOMContentLoaded', () => {
        let elems = document.querySelectorAll('.sidenav');
        let instances = window.M.Sidenav.init(elems);
    });

    return (
        <header className='header'>
            <nav>
                <div className="nav-wrapper">
                    <NavLink to='/' className='brand-logo center'>
                        <span className='white red-text text-lighten-1 header__logo'>RESIN.</span>
                        <span className='header__logo'>GLAZE</span>
                    </NavLink>
                    <NavLink to='#' data-target='mobile-demo' className='sidenav-trigger'>
                        <i className='material-icons'>menu</i>
                    </NavLink>
                    <ul className='right hide-on-med-and-down'>
                        {/*<li><NavLink to='/search'><i className='material-icons'>search</i></NavLink></li>*/}
                        <li><NavLink to='/products'>Каталог</NavLink></li>
                        <li>
                            <NavLink to='/cart'>
                                <i className='material-icons'>shopping_cart</i><div className='nav__counter'>{counter > 0 && counter}</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <ul className='sidenav' id='mobile-demo'>
                {/*<li><NavLink to='/search'>Поиск</NavLink></li>*/}
                <li><NavLink to='/products'>Каталог</NavLink></li>
                <li><NavLink to='/cart'>Корзина</NavLink></li>
            </ul>
        </header>
    );
};

const mapStateToProps = state => {
    return {
        counter: state.cart.counter
    }
};

export default connect(mapStateToProps)(Header);