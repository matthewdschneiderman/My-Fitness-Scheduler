import express, { Request, Response } from 'express';
import { FitnessSchedule, NewScheduleBody } from '../types/schedule'; // Import the interface
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

// Hardcoded list of schedules for now
const schedules: FitnessSchedule[] = [
  {
    id: '1',
    title: 'Morning Yoga',
    description: 'Relaxing morning yoga session',
    date: '2025-01-22',
    time: '07:00',
  },
  {
    id: '2',
    title: 'Evening Run',
    date: '2025-01-22',
    time: '18:00',
  },
];
// GET /api/schedules - Fetch all schedules
router.get('/', (req, res) => {
  res.json(schedules); // Send the list of schedules as a response
});

router.get(
  '/:id',
  (req: Request<{ id: string }>, res: Response<FitnessSchedule | { error: string }>) => {
    const { id } = req.params;
    const schedule = schedules.find((s) => id === s.id);

    if (!schedule) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    res.json(schedule);
  }
);

router.post(
  '/',
  (req: Request<{}, {}, NewScheduleBody>, res: Response<FitnessSchedule | { error: string }>) => {
    const { title, description, date, time } = req.body;

    if (!title || !description || !date || !time) {
      res.status(400).json({ error: 'Title, date, and time are required' });
      return;
    }

    const newSchedule: FitnessSchedule = {
      id: uuidv4(),
      title: 'Morning Yoga',
      description: 'Relaxing morning yoga session',
      date: '2025-01-22',
      time: '07:00',
    };
    schedules.push(newSchedule);

    res.status(201).json(newSchedule);
  }
);

export default router;
