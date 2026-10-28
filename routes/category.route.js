import express from 'express';
import { create, getAll, getOne, remove, update } from '../controllers/category.controller.js';
const categoryRoute = express.Router();

categoryRoute.post('/', create);
categoryRoute.get('/', getAll);
categoryRoute.get('/:id', getOne);
categoryRoute.put('/:id', update);
categoryRoute.delete('/:id', remove);
export default categoryRoute;update
