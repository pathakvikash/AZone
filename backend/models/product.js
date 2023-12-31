const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  brand: String,
  quantity: Number,
  productNumber: Number,
  category: String,
  rating: Number,
  price: Number,
  description: String,
  image_url: String,
});

module.exports = mongoose.model('Product', productSchema);
