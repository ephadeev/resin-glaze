import React from 'react';
import {connect} from 'react-redux';
import {useMessage} from '../../hooks/message.hook';
import {getProducts} from '../../Redux/actions/products-actions';

const CmsProduct = ({image, name, about, price, id, getProducts}) => {
    const message = useMessage();

    const deleteHandler = () => {
        fetch(`http://localhost:5000/api/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                message(data);
                getProducts();
            })
            .catch(err => console.log(err.message))
    };

    return (
        <tr className='row valign-wrapper'>
            <td className='col s2 m2 l2'>
                <img
                    src={`/uploads/${image}`}
                    alt='Изображение товара'
                    className='circle responsive-img' />
            </td>
            <td className='col s3 m3 l3'>{name}</td>
            <td className='col s4 m4 l4'>{about}</td>
            <td className='col s2 m2 l2'>{price}</td>
            <td className='col s1 m1 l1'>
                <button className='btn-floating btn-small waves-effect waves-light red' onClick={deleteHandler}>
                    <i className='material-icons'>delete</i>
                </button>
            </td>
        </tr>
    )
}

const mapDispachToProps = {
    getProducts
}

export default connect(null, mapDispachToProps)(CmsProduct);