import React from 'react';
import {connect} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {onChangeOrderFirstName, onChangeOrderLastName, onChangeOrderTel, onChangeOrderStreet, onChangeOrderHome,
    onChangeOrderApartment, createOrder} from '../../Redux/actions/cart-actions';
import {getOrders} from '../../Redux/actions/cms-actions';
import {useMessage} from '../../hooks/message.hook';

const Checkout = ({
                      counter, totalAmount, orderFirstName, orderLastName, orderTel, orderStreet, orderHome,
                      orderApartment, cart, onChangeOrderFirstName, onChangeOrderLastName, onChangeOrderTel,
                      onChangeOrderStreet, onChangeOrderHome, onChangeOrderApartment, getOrders, createOrder}) => {
    const message = useMessage();
    const history = useHistory();

    let order = {
        firstName: orderFirstName,
        lastName: orderLastName,
        tel: orderTel,
        city: 'Минск',
        street: orderStreet,
        home: orderHome,
        apartment: orderApartment,
        cart: cart
    };

    const addOrder = event => {
        event.preventDefault();
        if (orderFirstName && orderLastName && orderTel && orderStreet && orderHome && orderApartment) {
            createOrder(order)
                .then(data => {
                    message(data);
                    getOrders();
                    history.push('/order-completed');
                })
        }
    };

    const onChangeFirstName = event => onChangeOrderFirstName(event.target.value);
    const onChangeLastName = event => onChangeOrderLastName(event.target.value);
    const onChangeTel = event => onChangeOrderTel(Number(event.target.value));
    const onChangeStreet = event => onChangeOrderStreet(event.target.value);
    const onChangeHome = event => onChangeOrderHome(event.target.value);
    const onChangeApartment = event => onChangeOrderApartment(event.target.value);

    return (
        <>
            <Helmet>
                <title>Оформление заказа</title>
            </Helmet>
            <main className='main'>
                <nav className='center'>
                    <div className="nav-wrapper">
                        <div className="col s12">
                            <Link to='/cart' className='breadcrumb'>Корзина</Link>
                            <Link to='/checkout' className='breadcrumb'>Оформление заказа</Link>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <h4 className='white-text'>Оформление заказа</h4>
                        <form onSubmit={addOrder} className='col s12 m12 l12 white'>
                            <div className='row'>
                                <div className='input-field col s6 m6 l6'>
                                    <input
                                        id='first_name'
                                        type='text'
                                        className='validate'
                                        value={orderFirstName}
                                        onChange={onChangeFirstName}
                                    />
                                        <label htmlFor='first_name'>Имя</label>
                                </div>
                                <div className='input-field col s6 m6 l6'>
                                    <input
                                        id='last_name'
                                        type='text'
                                        className='validate'
                                        value={orderLastName}
                                        onChange={onChangeLastName}
                                    />
                                        <label htmlFor='last_name'>Фамилия</label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s6 m6 l6'>
                                    <i className='material-icons prefix'>phone</i>
                                    <input
                                        id='icon_telephone'
                                        type='tel'
                                        className='validate'
                                        value={orderTel}
                                        onChange={onChangeTel}
                                    />
                                    <label htmlFor='icon_telephone'> </label>
                                </div>
                                <div className='input-field col s6 m6 l6'>
                                    <input
                                        id='city'
                                        type='text'
                                        className='validate'
                                        value='Минск'
                                        disabled={true}
                                    />
                                    <label htmlFor='city'> </label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='input-field col s4 m4 l4'>
                                    <input
                                        id='street'
                                        type='tel'
                                        className='validate'
                                        value={orderStreet}
                                        onChange={onChangeStreet}
                                    />
                                    <label htmlFor='street'>Улица</label>
                                </div>
                                <div className='input-field col s4 m4 l4'>
                                    <input
                                        id='home'
                                        type='text'
                                        className='validate'
                                        value={orderHome}
                                        onChange={onChangeHome}
                                    />
                                    <label htmlFor='home'>Дом</label>
                                </div>
                                <div className='input-field col s4 m4 l4'>
                                    <input
                                        id='apartment'
                                        type='text'
                                        className='validate'
                                        value={orderApartment}
                                        onChange={onChangeApartment}
                                    />
                                    <label htmlFor='apartment'>Квартира</label>
                                </div>
                                <div className='col s12 m12 l12'>
                                    <h4>Итого</h4>
                                    <p>{counter > 0 && counter} товар(а / ов) на сумму {totalAmount > 0 && totalAmount} руб.</p>
                                    <p>Стоимость доставки 0 руб.</p>
                                    <p>К оплате {totalAmount > 0 && totalAmount} руб.</p>
                                    <button type='submit' className='waves-effect waves-light btn'>Подтвердить заказ</button>
                                    {/* <p>
                                        Подтверждая заказ, я принимаю условия
                                        <a className="modal-trigger"
                                        href="#modal1"
                                        >
                                            пользовательского соглашения
                                        </a>
                                    </p>
                                    <div id="modal1" className="modal">
                                        <div className="modal-content">
                                            <h4>Пользовательское соглашение</h4>
                                            <p>
                                                Я согласен(а) с условиями политики конфиденциальности и разрешаю использовать мои
                                                персональные данные на законных основаниях.
                                            </p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};

Checkout.propTypes = {
    counter: PropTypes.number,
    totalAmount: PropTypes.number,
    cart: PropTypes.object,
    getOrders: PropTypes.func,
    createOrder: PropTypes.func
};

const mapStateToProps = state => {
    return {
        counter: state.cart.counter,
        totalAmount: state.cart.totalAmount,
        orderFirstName: state.cart.orderFirstName, 
        orderLastName: state.cart.orderLastName, 
        orderTel: state.cart.orderTel, 
        orderStreet: state.cart.orderStreet, 
        orderHome: state.cart.orderHome, 
        orderApartment: state.cart.orderApartment,
        cart: state.cart.cart
    }
};

const mapDispatchToProps = {
    onChangeOrderFirstName,
    onChangeOrderLastName,
    onChangeOrderTel,
    onChangeOrderStreet,
    onChangeOrderHome,
    onChangeOrderApartment,
    getOrders,
    createOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);