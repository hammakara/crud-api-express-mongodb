import Category from '../models/category.model.js';
export const create = async (req, res) => {
  try {
    const result = await Category.create(req.body);
    res.status(201).json({
      message: 'category created!',
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const result = await Category.find();
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.findById(id);
    if (!result) {
      return res.status(404).json({ error: 'Category not found!' });
    }
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!result) {
      return res.status(404).json({ error: 'Category not found!' });
    }
    res.status(200).json({
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: 'Category not found!' });
    }
    res.status(200).json({
      message: 'Category deleted!',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};
