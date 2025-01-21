import express from 'express';
import healthRouter from './routes/health';
import cors from 'cors';
import path from 'path';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(cors({ origin: 'http://localhost:5173' })); // Allow Vite frontend
}

// Serve static files from the React app

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.use('/api', healthRouter);

app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
