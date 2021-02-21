import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Checkout = ({counter, totalAmount}) => {

    return (
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
                    <form className='col s12 m12 l12'>
                        <div className='row'>
                            <div className='input-field col s6 m6 l6'>
                                <input id='first_name' type='text' className='validate' />
                                    <label htmlFor='first_name'>Имя</label>
                            </div>
                            <div className='input-field col s6 m6 l6'>
                                <input id='last_name' type='text' className='validate' />
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
                                />
                                <label htmlFor='icon_telephone'>Мобильный телефон</label>
                            </div>
                            <div className='input-field col s6 m6 l6'>
                                <input id='city' type='text' className='validate' />
                                <label htmlFor='city'>Город</label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input-field col s4 m4 l4'>
                                <input id='street' type='tel' className='validate' />
                                <label htmlFor='street'>Улица</label>
                            </div>
                            <div className='input-field col s4 m4 l4'>
                                <input id='home' type='text' className='validate' />
                                <label htmlFor='home'>Дом</label>
                            </div>
                            <div className='input-field col s4 m4 l4'>
                                <input id='apartment' type='text' className='validate' />
                                <label htmlFor='apartment'>Квартира</label>
                            </div>
                        </div>
                    </form>
                    <div className='card-panel'>
                        <h4>Итого</h4>
                        <p>{counter > 0 && counter} товар(а / ов) на сумму {totalAmount > 0 && totalAmount} руб.</p>
                        <p>Стоимость доставки 0 руб.</p>
                        <p>К оплате {totalAmount > 0 && totalAmount} руб.</p>
                        <button className='waves-effect waves-light btn'>Подтвердить заказ</button>
                        <p>
                            Подтверждая заказ, я принимаю условия
                            <a className="modal-trigger"
                               href="#modal1"
                            >
                                пользовательского соглашения
                            </a>
                            <div id="modal1" className="modal">
                                <div className="modal-content">
                                    <h4>Пользовательское соглашение</h4>
                                    <p>
                                        Я согласен(а) с условиями политики конфиденциальности и разрешаю использовать мои
                                        персональные данные на законных основаниях.
                                    </p>
                                </div>
                            </div>
                        </p>

                    </div>
                </div>
            </div>
        </main>
    );
};

Checkout.propTypes = {
    counter: PropTypes.number,
    totalAmount: PropTypes.number
};

const mapStateToProps = state => {
    return {
        counter: state.cart.counter,
        totalAmount: state.cart.totalAmount
    }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);