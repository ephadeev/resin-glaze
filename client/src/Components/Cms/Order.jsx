import React from 'react';
import {connect} from 'react-redux';
import {useMessage} from '../../hooks/message.hook';
import {getOrders} from '../../Redux/actions/cms-actions';

const Order = ({firstName, lastName, tel, city, street, home, apartment, cart, id, getOrders}) => {
    const message = useMessage();

    const deleteHandler = () => {
        fetch(`http://localhost:5000/api/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                message(data);
                getOrders();
            })
            .catch(err => console.log(err.message))
    };

    // TODO: proptypes
    return (
        <tr className='row valign-wrapper'>
            <td className='col s4 m4 l4'>
                {firstName} {lastName} {tel}
            </td>
            <td className='col s4 m4 l4'>{city} {street} {home} {apartment}</td>
            <td className='col s3 m3 l3'>{JSON.stringify(cart)}</td>
            <td className='col s1 m1 l1'>
                <button className='btn-floating btn-small waves-effect waves-light red' onClick={deleteHandler}>
                    <i className='material-icons'>delete</i>
                </button>
            </td>
        </tr>
    )
};

const mapDispatchToProps = {
    getOrders
};

export default connect(null, mapDispatchToProps)(Order);