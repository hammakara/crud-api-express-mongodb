import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/itp-3');
  console.log('Database connected!');
};
export default connectDB;
