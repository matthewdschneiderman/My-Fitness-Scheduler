import express, { Request, Response } from 'express';
import { FitnessSchedule, NewScheduleBody } from '../types/schedule'; // Import the interface
import { v4 as uuidv4 } from 'uuid';
import { validateScheduleInput } from '../utils/validation';
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
    console.log(req.body);
    const validationError = validateScheduleInput(req.body);
    if (validationError) {
      res.status(400).json({ error: validationError });
      return;
    }

    const newSchedule: FitnessSchedule = {
      id: uuidv4(),
      ...req.body,
    };
    schedules.push(newSchedule);

    res.status(201).json(newSchedule);
  }
);

router.put(
  '/:id',
  (
    req: Request<{ id: string }, {}, Partial<FitnessSchedule>>,
    res: Response<FitnessSchedule | { error: string }>
  ) => {
    const { id } = req.params;
    const { title, description, date, time } = req.body;
    const schedule = schedules.find((s) => s.id === id);

    if (!schedule) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    const validationError = validateScheduleInput({ title, date, time });
    if (validationError) {
      res.status(400).json({ error: validationError });
    }

    if (title) schedule.title = title;
    if (description) schedule.description = description;
    if (date) schedule.date = date;
    if (time) schedule.time = time;

    res.json(schedule);
  }
);

router.delete(
  '/:id',
  (req: Request<{ id: string }>, res: Response<{ message: string } | { error: string }>) => {
    const { id } = req.params;

    const scheduleIndex = schedules.findIndex((s) => s.id === id);

    if (scheduleIndex === -1) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    schedules.splice(scheduleIndex, 1);
    res.json({ message: 'Schedule deleted successfully' });
  }
);

export default router;
