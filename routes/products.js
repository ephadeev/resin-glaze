const router = require('express').Router();
const multer = require('multer');
let Products = require('../models/products.model');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './client/public/uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({storage: storage});

// api/products/
router.route('/').get((req, res) => {
    Products.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err))
});

// api/products/:id
router.route('/:id').get((req, res) => {
    Products.findById(req.params.id)
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

// api/products/add
router.post('/add', upload.single('image'), (req, res) => {
    const name = req.body.name;
    const about = req.body.about;
    const price = req.body.price;
    const image = req.file.originalname;

    const newProduct = new Products(
        {
            name,
            about,
            price,
            image
        }
    );

    newProduct.save()
        .then(() => res.json('Product added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// api/products/update/:id
router.put('/update/:id', upload.single('image'), (req, res) => {
    Products.findById(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.about = req.body.about;
            product.price = req.body.price;
            product.image = req.file.originalname;

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