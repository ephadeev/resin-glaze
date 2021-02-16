import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = ({name, about, price, id}) => {
    return (
        <div className='product__container'>
            <Link to={`products/${id}`} className='links'>
                <div className="product__wrapper">
                    <div className='product__name'>{name}</div>
                    <div className='product__about'>{about}</div>
                    <div className='product__price'>{price}</div>
                </div>
            </Link>
        </div>
    );
};

Product.propTypes = {
    name: PropTypes.string,
    about: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string
}

export default Product;