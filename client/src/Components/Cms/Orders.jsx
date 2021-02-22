import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import {getOrders} from '../../Redux/actions/cms-actions';


const Orders = ({orders, getOrders, products}) => {
    useEffect(() => {
        if (orders.length === 0) {
            getOrders();
        }
    }, []);

    const ordersFromProps = orders
        .map(order => {
            return (
                <tr className='row valign-wrapper'>
                    <td className='col s4 m4 l4'>
                        {order.firsrtName} {order.lastName} {order.tel}
                    </td>
                    <td className='col s4 m4 l4'>{order.city} {order.street}{order.home} {order.apartment}</td>
                    <td className='col s3 m3 l3'>{JSON.stringify(order.cart)}</td>
                    <td className='col s1 m1 l1'>
                        <button className='btn-floating btn-small waves-effect waves-light red'><i className='material-icons'>delete</i></button>
                    </td>
                </tr>
            )
        });
    return (
        <main className='main'>
            <div className='container'>
                <table className='white-text highlight'>
                    <thead>
                        <tr className='row'>
                            <th className='col s4 m4 l4'>Получатель</th>
                            <th className='col s4 m4 l4'>Адрес</th>
                            <th className='col s3 m3 l3'>Заказ</th>
                            {/* <th className='col s2 m2 l2'>Дата</th> */}
                            <th className='col s1 m1 l1'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersFromProps}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

Orders.propTypes = {
    orders: PropTypes.array,
    getOrders: PropTypes.func,
    products: PropTypes.array
};

const mapStateToProps = state => {
    return {
        orders: state.cms.orders,
        products: state.products.products
    }
};

const mapDispatchToProps = {
    getOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);