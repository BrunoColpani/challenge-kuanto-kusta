import * as mongoose from 'mongoose';

export const Products = new mongoose.Schema({
  productId: String,
  price: Number,
});
