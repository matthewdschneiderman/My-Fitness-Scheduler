import express from 'express';
import fitnessClassRouter from './routes/fitnessClasses';
import cors from 'cors';
import path from 'path';
import connectDB from './config/db';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: 'http://localhost:5173' })); // Allow Vite frontend
}
app.use(express.json());

connectDB();

// Routes

app.use('/api/fitnessClasses', fitnessClassRouter);

// Serve static files from the React app

// Middleware to parse JSON

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
