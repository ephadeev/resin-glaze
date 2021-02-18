import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clickPlus} from '../../Redux/actions/card-actions';
import PropTypes from 'prop-types';

const Product = ({name, price, image, id, clickPlus}) => {

    const plus = event => {
        event.preventDefault();
        clickPlus(id);
      }

    return (
        <div className='col s12 m6 l4 product'>
            <Link to={`products/${id}`} className=''>
                <div className="card medium blue-grey darken-1 hoverable">
                    <div className='card-image'>
                        <img src={`/uploads/${image}`} alt="Изображение товара" />
                        <span className='card-title left'>{price} руб.</span>
                    </div>
                    <div className='card-content white-text'>
                        <span className='card-title'>{name}</span>
                    </div>
                    <div className='card-action'>
                        
                    </div>
                </div>
            </Link>
            <button 
                className="btn-floating halfway-fab btn-large waves-effect waves-light red right hoverable" 
                onClick={plus}>
                <i className="material-icons">add_shopping_cart</i>
            </button>
        </div>
    );
};

Product.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    id: PropTypes.string
};

const mapDispatchToProps = {
    clickPlus
}

export default connect(null, mapDispatchToProps)(Product);