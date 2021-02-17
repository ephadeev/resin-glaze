const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
let Auth = require('../models/auth.model');

// api/auth/register
router.post('/register', 
            [
                check('email', 'Некорректный email').isEmail(),
                check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
            ], 
            async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const {email, password} = req.body;
        const candidate = await Auth.findOne({email});

        if (candidate) {
            return res.status(400).json({message: 'Такой пользователь уже существует'});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const auth = new Auth({email, password: hashedPassword});

        await auth.save();

        res.status(201).json({message: 'Пользователь создан'});

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так при регистрации'})
    }
});

// api/auth/login
router.post(
            '/login', 
            [
                check('email', 'Введите корректный email').normalizeEmail().isEmail(),
                check('password', 'Введите пароль').exists()
            ],
            async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }
        
        const {email, password} = req.body;

        const auth = await Auth.findOne({email});

        if (!auth) {
            return res.status(400).json({message: 'Пользователь не найден'});
        }

        const isMatch = await bcrypt.compare(password, auth.password);

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'});
        }

        const token = jwt.sign(
            {userId: auth.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        );

        res.json({token, userId: auth.id});

    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так при регистрации'});
    }
});

module.exports = router;