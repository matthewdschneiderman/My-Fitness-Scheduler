import mongoose, { Schema, Document } from 'mongoose';

export interface ISchedule extends Document {
  title: string;
  description: string;
  date: Date;
  time: string;
}

const ScheduleSchema: Schema = new Schema<ISchedule>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

const Schedule = mongoose.model<ISchedule>('Schedule', ScheduleSchema);

export default Schedule;
