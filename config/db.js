import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://hammakara51_db_user:fwueR8UENAWkHbuc@cluster0.yfcuwut.mongodb.net/itp-3'
  );
  console.log('Database connected!');
};
export default connectDB;
