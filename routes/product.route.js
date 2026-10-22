import express from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from '../controllers/product.controller.js';

const productRoute = express.Router();

productRoute.post('/', createProduct);
productRoute.get('/', getAllProducts);
productRoute.get('/:id', getOneProduct);
productRoute.put('/:id', updateProduct);
productRoute.delete('/:id', deleteProduct);

export default productRoute;
