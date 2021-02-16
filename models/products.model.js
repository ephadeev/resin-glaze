const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        name: {type: String, required: true, unique: false},
        about: {type: String, required: true},
        price: {type: Number, required: true},
        image: {type: String, required: true}
    },
    {
        timestamps: true
    }
);

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;