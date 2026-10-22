import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    stock: Number,
  },
  { timestamps: true }
);
const Product = mongoose.model('products', productSchema);
export default Product;
