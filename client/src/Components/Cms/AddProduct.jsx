import React, {useState} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getProducts} from "../../Redux/actions/products-actions";
import {onChangeProductName, onChangeProductAbout, onChangeProductPrice} from '../../Redux/actions/cms-actions'

const AddProduct = ({
                        productName, productAbout, productPrice,
                        onChangeProductName, onChangeProductAbout, onChangeProductPrice,
                        getProducts}) => {

    const [fileName, setFileName] = useState('');
    const onChangeFile = event => {
        setFileName(event.target.files[0])
    };

    const addProductHandler = () => {
        const formData = new FormData();

        formData.append('name', productName);
        formData.append('about', productAbout);
        formData.append('price', productPrice);
        formData.append('image', fileName);


        /*let product = {
            name: productName,
            about: productAbout,
            price: productPrice,
            image
        };*/

        fetch('http://localhost:5000/api/products/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(() => getProducts())
            .catch(err => console.log(err.message))
    };

    const addProduct = event => {
        event.preventDefault();
        if (productName && productAbout && productPrice) {
            addProductHandler();
        }
    };

    const onChangeName = event => onChangeProductName(event.target.value);
    const onChangeAbout = event => onChangeProductAbout(event.target.value);
    const onChangePrice = event => onChangeProductPrice(event.target.value);

    return (
        <div className='add-product'>
            <form onSubmit={addProduct} encType='multipart/form-data'>
                <input
                    type='text'
                    className='create-note__note-input'
                    placeholder='Название товара'
                    onChange={onChangeName}
                    value={productName}
                    required />
                <input
                    type='text'
                    className='create-note__note-input'
                    placeholder='Описание товара'
                    onChange={onChangeAbout}
                    value={productAbout}
                    required />
                <input
                    type='text'
                    className='create-note__note-input'
                    placeholder='Цена товара'
                    onChange={onChangePrice}
                    value={productPrice}
                    required />
                <input
                    type='file'
                    filename='image'
                    onChange={onChangeFile}
                    required />
            </form>
            <button type='submit'
                    onClick={addProduct}>
                Добавить товар
            </button>
        </div>
    )
};

AddProduct.propTypes = {
    productName: PropTypes.string,
    productAbout: PropTypes.string,
    productPrice: PropTypes.number,
    onChangeProductName: PropTypes.func,
    onChangeProductAbout: PropTypes.func,
    onChangeProductPrice: PropTypes.func,
    getProducts: PropTypes.func
};

const mapStateToProps = state => {
    return {
        productName: state.cms.newProductName,
        productAbout: state.cms.newProductAbout,
        productPrice: state.cms.newProductPrice
    }
};

const mapDispatchToProps = {
    onChangeProductName,
    onChangeProductAbout,
    onChangeProductPrice,
    getProducts
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);