import React from 'react';

const Footer = () => {
    return (
        <footer className='page-footer'>
            <div className='container'>
                <div className="row">
                    <div className='col l6 s12'>
                            <h5>RESIN.GLAZE</h5>
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