import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/' className='header__link'><h1>RESIN.GLAZE</h1></Link>
        </header>
    );
};

export default Header;