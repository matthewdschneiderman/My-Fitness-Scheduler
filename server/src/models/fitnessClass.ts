import mongoose, { Schema, Document } from 'mongoose';
import { ILocation } from './location';
import { IInstructor } from './instructor';

export interface IFitnessClass extends Document {
  title: string;
  description: string;
  date: Date;
  time: string;
  instructor: IInstructor;
  location: ILocation;
}

const FitnessClassSchema: Schema = new Schema<IFitnessClass>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  instructor: { type: Schema.Types.ObjectId, ref: 'Instructor', required: true },
  location: { type: Schema.Types.ObjectId, ref: 'Location', required: true },
});

const FitnessClass = mongoose.model<IFitnessClass>('FitnessClass', FitnessClassSchema);

export default FitnessClass;
