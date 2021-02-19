import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const Cart = ({card}) => {
    // количество видов товаров в корзине:
    console.log(Object.keys(card).length);

    const getCartPositions = () => {
        const cartPositions = [];

        for (const [key, value] of Object.entries(card)) {
            console.log(`${key}: ${value}`);

            cartPositions.push(
                <div className='row'>
                    <div className='col s12 m12 l12 product'>
                        <div>
                            lllll
                            {/*<img src={`/uploads/${image}`} alt="Изображение товара" />*/}
                        </div>
                    </div>
                </div>
                
            );
        }

        return cartPositions;
    }

    const cartPositions = getCartPositions();

    

    return (
        <main className='main'>
            <div className='container'>
                <div className='collection'>
                    {cartPositions}
                </div>
            </div>
        </main>
    );
};

Cart.propTypes = {
    value: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        card: state.card.value
    }
}

export default connect(mapStateToProps)(Cart);