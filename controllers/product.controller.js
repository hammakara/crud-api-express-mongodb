import Product from '../models/product.model.js';

export const createProduct = async (req, res) => {
  const result = await Product.create(req.body);
  res.json({
    message: 'Create Products',
    result,
  });
};

export const getAllProducts = (req, res) => {
  res.json({
    message: 'Get Products',
  });
};
