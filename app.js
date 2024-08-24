const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const itemRoutes = require('./routes/itemRoutes');
const dbConfig = require('./config/db');

const app = express();
app.use(bodyParser.json());

mongoose.connect(dbConfig.url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connted to Monngoose"))
    .catch(err => console.log("Error occurs" , err));

    app.use('/api/items', itemRoutes);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    }) ;