const express = require('express');
const config = require('config');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = config.get('port') || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/products', require('./routes/products'));

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();