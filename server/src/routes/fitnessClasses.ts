import express, { Request, Response } from 'express';
import fitnessClass from '../models/fitnessClass';
const router = express.Router();

// GET /api/schedules - Fetch all schedules
router.get('/', async (req, res) => {
  try {
    const schedules = await fitnessClass
      .find({
        // get 7 days of classes
        date: {
          $gte: new Date(new Date().setHours(0, 0, 0, 0)),
          $lt: new Date(new Date().setHours(24 * 7, 0, 0, 0)),
        },
      })
      .populate('location instructor');
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// router.get('/:id', async (req: Request<{ id: string }>, res: Response) => {
//   const { id } = req.params;
//   try {
//     const schedule = await Schedule.findById(id);
//     if (!schedule) {
//       res.status(404).json({ error: 'Schedule not found' });
//       return;
//     }
//     res.json(schedule);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// router.post('/', async (req: Request, res: Response) => {
//   try {
//     const newSchedule = new Schedule(req.body);
//     await newSchedule.save();

//     res.status(201).json(newSchedule);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// router.put('/:id', async (req: Request<{ id: string }>, res: Response) => {
//   const { id } = req.params;

//   try {
//     const schedule = await Schedule.findByIdAndUpdate(id, req.body);

//     if (!schedule) {
//       res.status(404).json({ error: 'Schedule not found' });
//       return;
//     }
//     res.json(schedule);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// router.delete(
//   '/:id',
//   async (req: Request<{ id: string }>, res: Response<{ message: string } | { error: string }>) => {
//     const { id } = req.params;

//     try {
//       const schedule = await Schedule.findByIdAndDelete(id);
//       if (!schedule) {
//         res.status(404).json({ error: 'Schedule not found' });
//         return;
//       }

//       res.json({ message: 'Schedule deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// );

export default router;
