const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
        firstName: {type: String, required: true, unique: false},
        lastName: {type: String, required: true},
        tel: {type: Number, required: true},
        city: {type: String, required: true},
        street: {type: String, required: true},
        home: {type: String, required: true},
        apartment: {type: String, required: true},
        cart: {type: Object, required: true}
        }, {
        timestamps: true
    }
);

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;