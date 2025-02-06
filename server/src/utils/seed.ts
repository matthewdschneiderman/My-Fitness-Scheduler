import mongoose from 'mongoose';
import Schedule from '../models/fitnessClass';
import dotenv from 'dotenv';

// Load environment variables (if using a `.env` file)
dotenv.config();

// MongoDB Connection URL (replace with your actual connection string)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fitness-scheduler';

// Sample schedule data
const schedules = [
  {
    title: 'Morning Yoga',
    description: 'A relaxing yoga session to start your day',
    date: new Date('2025-02-01'),
    time: '07:00',
  },
  {
    title: 'Evening Run',
    description: 'A quick jog around the park',
    date: new Date('2025-02-01'),
    time: '18:00',
  },
  {
    title: 'Pilates Class',
    description: 'Full-body pilates workout',
    date: new Date('2025-02-02'),
    time: '10:00',
  },
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log('Connected to MongoDB');

    // Clear existing schedules
    await Schedule.deleteMany({});
    console.log('Existing schedules deleted');

    // Insert new schedules
    await Schedule.insertMany(schedules);
    console.log('Database seeded with schedules');

    // Close the connection
    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1); // Exit process with failure
  }
};

// Run the seeding function
seedDatabase();
