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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            city: req.body.city,
            street: req.body.street,
            home: req.body.home,
            apartment: req.body.apartment,
            cart: req.body.cart,
    });

    newOrder.save()
        .then(() => res.json('Заказ успешно создан'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// api/orders/:id
router.route('/:id').delete((req, res) => {
    Orders.findByIdAndDelete(req.params.id)
        .then(() => res.json('Заказ удалён.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;