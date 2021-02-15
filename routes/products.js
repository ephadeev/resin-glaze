const router = require('express').Router();
let Products = require('../models/products.model');

// api/products/
router.route('/').get((req, res) => {
    Products.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err))
});

// api/products/add
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const about = req.body.about;
    const price = req.body.price;

    const newProduct = new Products(
        {
            name,
            about,
            price
        }
    );

    newProduct.save()
        .then(() => res.json('Product added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// api/products/update/:id
router.route('/update/:id').post((req, res) => {
    Products.findById(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.about = req.body.about;
            product.price = req.body.price;

            product.save()
                .then(() => res.json('Product updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

// api/products/:id
router.route('/:id').delete((req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;