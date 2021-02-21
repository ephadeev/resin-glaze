import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import Product from './Product';

const Products = ({products}) => {

    const productsFromProps = products
        .map(product => {
            return (
                <Product
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    id={product._id}
                    key={product._id} />
            )
        });
    return (
        <main className='main'>
            <div className='container'>
                <div className='row'>
                    {productsFromProps}
                </div>
            </div>
        </main>
    );
};

Products.propTypes = {
    products: PropTypes.array
};

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
};

export default connect(mapStateToProps)(Products);