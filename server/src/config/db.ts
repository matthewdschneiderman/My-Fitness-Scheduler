import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myfitnessdb';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB Connected...');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1); // Exit if connection fails
  }
};

export default connectDB;
