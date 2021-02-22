const router = require('express').Router();
const Orders = require('../models/orders.model');

// api/orders/
router.route('/').get((req, res) => {
        Orders.find()
            .then(orders => res.json(orders))
            .catch(err => res.status(400).json('Error: ' + err))
});

// api/orders/add
router.post('/add', (req, res) => {
    const newOrder = new Orders({
            firsrtName: req.body.firsrtName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            city: req.body.city,
            street: req.body.street,
            home: req.body.home,
            apartment: req.body.apartment,
            cart: req.body.cart,
    });

    newOrder.save()
        .then(() => res.json('Order added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;