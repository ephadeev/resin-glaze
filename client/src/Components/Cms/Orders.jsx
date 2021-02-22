import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../App.css';
import {getOrders} from '../../Redux/actions/cms-actions';
import Order from './Order';


const Orders = ({orders, getOrders}) => {
    useEffect(() => {
        if (orders.length === 0) {
            getOrders();
        }
    }, []);

    const ordersFromProps = orders
        .map(order => {
            return (
                <Order
                    firstName={order.firstName}
                    lastName={order.lastName}
                    tel={order.tel}
                    city={order.city}
                    street={order.street}
                    home={order.home}
                    apartment={order.apartment}
                    cart={order.cart}
                    id={order._id}
                    key={order._id} />
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
                            <th className='col s1 m1 l1'> </th>
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
    getOrders: PropTypes.func
};

const mapStateToProps = state => {
    return {
        orders: state.cms.orders
    }
};

const mapDispatchToProps = {
    getOrders
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);