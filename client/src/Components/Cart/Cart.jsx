import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import CartProduct from './CartProduct';

const Cart = ({cart, products, totalAmount}) => {
    // количество видов товаров в корзине:
    // console.log(Object.keys(cart).length);

    const cartProductsData = products.filter(product => cart[product._id]);
    // console.log('cartProductsData', cartProductsData);

    return (
        <>
            <Helmet>
                <title>Корзина</title>
            </Helmet>
            <main className='main'>
                <nav className='center'>
                    <div className="nav-wrapper">
                        <div className="col s12">
                            <Link to='/cart' className='breadcrumb'>Корзина</Link>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <h4 className='white-text'>Корзина</h4>
                    </div>
                    <ul className='collection'>
                        {!cartProductsData.length > 0 && (
                            <li className='collection-item'>{`Ваша корзина в данный момент пуста`}</li>
                        )}
                        {cartProductsData.map(product => {
                            return (
                                <CartProduct
                                    image={product.image}
                                    name={product.name}
                                    id={product._id}
                                    price={product.price}
                                    key={product._id}
                                />
                            )
                        })}
                    </ul>
                    {cartProductsData.length > 0 && (
                        <div className='card-panel'>
                            <h4>{totalAmount} руб.</h4>
                            <Link to='/checkout'
                                  className='waves-effect waves-light btn'
                            >
                                Оформить заказ
                            </Link>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    products: PropTypes.array,
    totalAmount: PropTypes.number
};

const mapStateToProps = state => {
    return {
        cart: state.cart.cart,
        products: state.products.products,
        totalAmount: state.cart.totalAmount
    }
};

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);