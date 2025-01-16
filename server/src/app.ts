import express from 'express';
import healthRouter from './routes/health';
import cors from 'cors';

const app = express();

app.use(cors());

app.use('/api', healthRouter);

app.listen(5001, () => {
  console.log('Server running on http://localhost:5001');
});
