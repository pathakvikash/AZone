const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Route to fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching products.' });
  }
});

// Route to fetch a single product
router.get('/:id', async (req, res) => {
  try {
    console.log('Patha parms', req.params);
    console.log('Id type', typeof req.params.id);
    const product = await Product.findOne({ id: Number(req.params.id) });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    console.log(product);
    res.json(product);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching product.' });
  }
});

// make a new route to filter products by category
router.get('/category/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching products.' });
  }
});

module.exports = router;
