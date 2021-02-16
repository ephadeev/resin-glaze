import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const ProductPage = ({isLoading, ...ownProps}) => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${ownProps.match.params.index}`)
            .then(response => response.json())
            .then(data => setProductData(data))
            .catch(err => console.log(err.message))
    }, [ownProps.match.params.index]);

    return (
        <div className='product__container'>
            <div className="product__wrapper">
                <div>products page</div>
                <div className='product__name'>{productData?.name}</div>
                <div className='product__about'>{productData?.about}</div>
                <div className='product__price'>{productData?.price}</div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.products.isLoading
    }
};

export default connect(mapStateToProps)(ProductPage);