import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../Products/Product';
import {useAuth} from '../../hooks/auth.hook';
import {getProducts} from '../../Redux/actions/products-actions';
import '../../App.css';
import AddProduct from "./AddProduct";

const Cms = ({products}) => {

    const productsFromProps = products
        .map(product => {
            return (
                <Product
                    name={product.name}
                    about={product.about}
                    price={product.price}
                    id={product._id}
                    key={product._id} />
            )
        });
    return (
        <main className='wrapper'>
            <div className='container product'>
                <AddProduct />
                {productsFromProps}
            </div>
        </main>
    );
};

Cms.propTypes = {
    products: PropTypes.array,
    getProducts: PropTypes.func
};

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
};

const mapDispatchToProps = {
    getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(Cms);