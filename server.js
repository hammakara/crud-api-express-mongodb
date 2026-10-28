import express from 'express';
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);
import connectDB from './config/db.js';
import productRoute from './routes/product.route.js';
import categoryRoute from './routes/category.route.js';
const app = express();
app.use(express.json());
connectDB();
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);
app.listen(8001, () => {
  console.log(`server http://localhost:8001 is running!`);
});
