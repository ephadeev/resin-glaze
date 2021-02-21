import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {clickPlus, clickMinus} from '../../Redux/actions/cart-actions';

const Cart = ({cart, products, clickPlus, clickMinus, totalAmount}) => {
    // количество видов товаров в корзине:
    console.log(Object.keys(cart).length);

    const cartProductsData = products.filter(product => cart[product._id]);
    console.log('cartProductsData', cartProductsData);

    const plus = (id, price) => {
        clickPlus(id, price);
    };

    const minus = (id, price) => {
        clickMinus(id, price);
    };

    return (
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
                            <li className='collection-item avatar'>
                                <img src={`/uploads/${product.image}`} alt="" className='circle' />
                                <span className="title">{product.name}</span>
                                <span className='secondary-content valign-wrapper'>
                                    <button
                                        className='btn-floating btn-small waves-effect waves-light teal hoverable cart__minus'
                                        onClick={() => minus(product._id, product.price)}
                                    >
                                        <i className='small material-icons'>remove</i>
                                    </button>
                                    <span className='card-panel teal white-text cart__amount'>
                                        {cart[product._id]}
                                    </span>
                                    <button
                                        className='btn-floating btn-small waves-effect waves-light teal hoverable cart__plus'
                                        onClick={() => plus(product._id, product.price)}
                                    >
                                        <i className='small material-icons'>add</i>
                                    </button>
                                    {product.price * cart[product._id]}<span> руб.</span>
                                </span>
                            </li>
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
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    products: PropTypes.array,
    clickPlus: PropTypes.func,
    clickMinus: PropTypes.func,
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
    clickPlus,
    clickMinus
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);