import express from 'express';
import connectDB from './config/db.js';
import productRoute from './routes/product.route.js';
const app = express();
app.use(express.json());
connectDB();

app.use('/api/products', productRoute);
app.listen(8001, () => {
  console.log(`server http://localhost:8001 is running!`);
});
