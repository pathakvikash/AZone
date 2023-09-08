const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Product = require('./models/product');
const productJson = require('../productsdb.json');

// Connect to the MongoDB database
mongoose
  .connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Successfully connected to the database');

    // Seed the database with the products
    const currentProductCount = await Product.count();
    if (currentProductCount == 0) {
      await Product.insertMany(productJson.products);
      console.log('Successfully seeded the database with products');
    }
  });

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');

// Define routes for users and products
app.use('/user', userRoutes);
app.use('/products', productRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server started on port ${process.env.PORT || 3001}`);
});
