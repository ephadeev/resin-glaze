import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {clickPlus} from '../../Redux/actions/cart-actions';

const ProductPage = ({isLoading, ...ownProps}) => {
    const [productData, setProductData] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/products/${ownProps.match.params.index}`)
            .then(response => response.json())
            .then(data => setProductData(data))
            .catch(err => console.log(err.message))
    }, [ownProps.match.params.index]);

    const plus = event => {
        event.preventDefault();
        ownProps.clickPlus(ownProps.match.params.index, productData?.price);
    };

    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.materialboxed');
        var instances = window.M.Materialbox.init(elems);
    });

    return (
        <main className='main'>
            <div className='container'>
                <div className="row">
                    <div className='col s12 m6 l6 product'>
                        <div className='card large blue-grey darken-1'>
                            <div className='card-image'>
                                <img src={`/uploads/${productData?.image}`}
                                     alt="Изображение товара"
                                     className='materialboxed responsive-img'
                                     width='650'
                                />
                                <span className='card-title'>{productData?.price} руб.</span>
                            </div>
                        </div>
                    </div>
                    <div className='col s12 m6 l6 product'>
                        <div className='card large blue-grey darken-1'>
                            <div className='card-content white-text'>
                                <div className='card-title'>{productData?.name}</div>
                                <div>{productData?.about}</div>
                                <button className='btn-small waves-effect waves-light left' onClick={plus}>
                                    <i className='material-icons'>add_shopping_cart</i>купить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.products.isLoading
    }
};

const mapDispatchToProps = {
    clickPlus
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);