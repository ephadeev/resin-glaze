import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; // TODO: prop-types
import {Helmet} from 'react-helmet';
import {clickPlus} from '../../Redux/actions/cart-actions';
import {getProduct} from '../../Redux/actions/products-actions';
import Loader from '../Loader/Loader';

const ProductPage = ({isLoading, ...ownProps}) => {

    useEffect(() => {
        ownProps.getProduct(ownProps.match.params.index);
    }, [ownProps.match.params.index]);

    if (isLoading) {
        return <Loader />
    }

    const plus = event => {
        event.preventDefault();
        ownProps.clickPlus(ownProps.match.params.index, ownProps.product?.price);
    };

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.materialboxed');
        var instances = window.M.Materialbox.init(elems);
    });

    return (
        <>
            <Helmet>
                <title>{ownProps.product?.name}</title>
            </Helmet>
            <main className='main'>
                <div className='container'>
                    <div className="row">
                        <div className='col s12 m6 l6 product'>
                            <div className='card large blue-grey darken-1'>
                                <div className='card-image'>
                                    {isLoading
                                        ? <Loader />
                                        : <img src={`/uploads/${ownProps.product.image}`}
                                               alt="Изображение товара"
                                               className='materialboxed responsive-img'
                                               width='650' />}
                                    <span className='card-title'>{ownProps.product?.price} руб.</span>
                                </div>
                            </div>
                        </div>
                        <div className='col s12 m6 l6 product'>
                            <div className='card large blue-grey darken-1'>
                                <div className='card-content white-text'>
                                    <div className='card-title'>{ownProps.product?.name}</div>
                                    <h5 className='center'>Описание</h5>
                                    <div className='product__about'>{ownProps.product?.about}</div>
                                    <div className='product__about'>Обмен/возврат товара в течение 14 дней</div>
                                    <button className='btn-small waves-effect waves-light right' onClick={plus}>
                                        <i className='material-icons'>add_shopping_cart</i>купить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.products.isLoading,
        product: state.products.product
    }
};

const mapDispatchToProps = {
    clickPlus,
    getProduct
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);