import mongoose from 'mongoose';

const connectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://hammakara51_db_user:L153m5naHpK52U5m@cluster0.s5iuslg.mongodb.net/itp-03'
  );
  console.log('Database connected!');
};
export default connectDB;
