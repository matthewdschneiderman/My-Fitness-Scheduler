import express, { Request, Response } from 'express';
import Schedule from '../models/schedule';
const router = express.Router();

// GET /api/schedules - Fetch all schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newSchedule = new Schedule(req.body);
    await newSchedule.save();

    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;

  try {
    const schedule = await Schedule.findByIdAndUpdate(id, req.body);

    if (!schedule) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete(
  '/:id',
  async (req: Request<{ id: string }>, res: Response<{ message: string } | { error: string }>) => {
    const { id } = req.params;

    try {
      const schedule = await Schedule.findByIdAndDelete(id);
      if (!schedule) {
        res.status(404).json({ error: 'Schedule not found' });
        return;
      }

      res.json({ message: 'Schedule deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

export default router;
