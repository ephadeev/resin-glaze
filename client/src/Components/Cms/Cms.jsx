import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../Products/Product';
import {useAuth} from '../../hooks/auth.hook';
import '../../App.css';
import AddProduct from "./AddProduct";

const Cms = ({products}) => {

    const productsFromProps = products
        .map(product => {
            return (
                <tr className='row valign-wrapper'>
                    <td className='col s2 m2 l2'>
                        <img
                            src={`/uploads/${product.image}`}
                            alt='Изображение товара'
                            className='circle responsive-img' />
                    </td>
                    <td className='col s3 m3 l3'>{product.name}</td>
                    <td className='col s4 m4 l4'>{product.about}</td>
                    <td className='col s2 m2 l2'>{product.price}</td>
                    <td className='col s1 m1 l1'>
                        <button className='btn-floating btn-small waves-effect waves-light red'><i className='material-icons'>delete</i></button>
                    </td>
                </tr>
            )
        });
    return (
        <main className='main'>
            <div className='container'>
                <h3 className='white-text highlight'>Добавить товар</h3>
                <AddProduct />
                <h3 className='white-text center'>Товары</h3>
                <table className='white-text highlight'>
                    <thead>
                        <tr className='row'>
                            <th className='col s2 m2 l2'>Фото</th>
                            <th className='col s3 m3 l3'>Название</th>
                            <th className='col s4 m4 l4'>Описание</th>
                            <th className='col s2 m2 l2'>Цена</th>
                            <th className='col s1 m1 l1'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsFromProps}
                    </tbody>
                </table>

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

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Cms);