import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {clickPlus} from '../../Redux/actions/card-actions';

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
        ownProps.clickPlus(ownProps.match.params.index);
    }

    return (
        <main className='main'>
            <div className='container'>
                <div className="row">
                    <div className='col s12 m12 l12 product'>
                        <div className='card blue-grey darken-1'>
                            <div className='card-image'>
                                <img src={`/uploads/${productData?.image}`} alt="Изображение товара" />
                                <span className='card-title'>{productData?.price} руб.</span>
                            </div>
                            <div className='card-content white-text'>
                                <div className='card-title'>{productData?.name}</div>
                                <div>{productData?.about}</div>
                            </div>
                        </div>
                        <button 
                            className="btn-floating halfway-fab btn-large waves-effect waves-light red right hoverable" 
                            onClick={plus}>
                            <i className="material-icons">add_shopping_cart</i>
                        </button>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);