import Product from '../models/product.model.js';

export const createProduct = async (req, res) => {
  const result = await Product.create(req.body);
  res.json({
    message: 'Create Products',
    result,
  });
};

export const getAllProducts = async (req, res) => {
  const result = await Product.find();
  res.json({
    message: 'Get Products',
    result,
  });
};

export const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  if (!result) {
    return res.status(404).json({ messsage: 'Product not found!' });
  }
  res.json({
    result,
  });
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock } = req.body;
  const result = await Product.findByIdAndUpdate(
    id,
    { name, description, price, stock },
    { new: true }
  );
  if (!result) {
    return res.status(404).json({ messsage: 'Product not found!' });
  }
  res.json({
    message: 'Product updated!',
    result,
  });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndDelete(id);
  if (!result) {
    return res.status(404).json({ messsage: 'Product not found!' });
  }
  res.json({
    message: 'Product deleted!',
  });
};
