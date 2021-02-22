import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clickPlus, clickMinus} from '../../Redux/actions/cart-actions';

const CartProduct = ({image, name, id, price, cart, clickPlus, clickMinus}) => {
    const plus = (id, price) => {
        clickPlus(id, price);
    };

    const minus = (id, price) => {
        clickMinus(id, price);
    };

    return (
        <li className='collection-item avatar'>
            <img src={`/uploads/${image}`} alt="" className='circle' />
            <span className="title">{name}</span>
            <span className='secondary-content valign-wrapper'>
                <button
                    className='btn-floating btn-small waves-effect waves-light teal hoverable cart__minus'
                    onClick={() => minus(id, price)}
                >
                    <i className='small material-icons'>remove</i>
                </button>
                <span className='card-panel teal white-text cart__amount'>
                    {cart[id]}
                </span>
                <button
                    className='btn-floating btn-small waves-effect waves-light teal hoverable cart__plus'
                    onClick={() => plus(id, price)}
                >
                    <i className='small material-icons'>add</i>
                </button>
                {price * cart[id]}<span> руб.</span>
            </span>
        </li>
    )
}

CartProduct.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    price: PropTypes.number,
    cart: PropTypes.object,
    clickPlus: PropTypes.func,
    clickMinus: PropTypes.func
};

const mapStateToProps = state => {
    return {
        cart: state.cart.cart
    }
};

const mapDispatchToProps = {
    clickPlus,
    clickMinus
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);