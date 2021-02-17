import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../Products/Product';
import {useAuth} from '../../hooks/auth.hook';
import '../../App.css';

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
                {productsFromProps}
            </div>
        </main>
    );
};

Cms.propTypes = {
    products: PropTypes.array
};

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
};

export default connect(mapStateToProps)(Cms);