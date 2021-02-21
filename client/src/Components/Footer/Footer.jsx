import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='page-footer'>
            <div className='container'>
                <div className="row">
                    <div className='col l6 s12'>
                        <Link to='/'>
                            <h5>
                                <span className='white red-text text-lighten-1 header__logo'>RESIN.</span>
                                <span className='white-text header__logo'>GLAZE</span>
                            </h5>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
            <div className="container">
            © 2021 All rights reserved.
            <a 
                className="grey-text text-lighten-4 right"
                href="https://www.linkedin.com/in/evgeny-phadeev-0a639899/?locale=en_US" 
                target='blank'
                rel='noopener noreferrer'>developed by ephadeev</a>
            </div>
          </div>
        </footer>
    );
};

export default Footer;