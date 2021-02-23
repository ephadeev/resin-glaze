import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import '../../App.css';
import Product from './Product';
import Loader from "../Loader/Loader";

const Products = ({products, isLoading}) => {
    if (isLoading) {
        return <Loader />
    }

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
        <>
            <Helmet>
                <title>Каталог</title>
            </Helmet>
            <main className='main'>
                <div className='container'>
                    <div className='row'>
                        {productsFromProps}
                    </div>
                </div>
            </main>
        </>
    );
};

Products.propTypes = {
    products: PropTypes.array,
    isLoading: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        products: state.products.products,
        isLoading: state.products.isLoading
    }
};

export default connect(mapStateToProps)(Products);