import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clickPlus} from '../../Redux/actions/cart-actions';
import PropTypes from 'prop-types';
import {useMessage} from '../../hooks/message.hook';

const Product = ({name, price, image, id, clickPlus}) => {
    const message = useMessage();

    const plus = event => {
        event.preventDefault();
        clickPlus(id, price);
        message('Товар добавлен в корзину');
    };

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
                    <div className='card-action'>{/*TODO: ???*/}
                        
                    </div>
                </div>
            </Link>
            <button 
                className="btn-floating halfway-fab btn-large waves-effect waves-light teal right hoverable"
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
};

export default connect(null, mapDispatchToProps)(Product);