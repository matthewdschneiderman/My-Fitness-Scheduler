import mongoose, { Schema, Document } from 'mongoose';

export interface IInstructor extends Document {
  name: string;
  address: string;
}

const InstructorSchema: Schema = new Schema<IInstructor>({
  name: { type: String, required: true },
  address: { type: String, required: true },
});

const Location = mongoose.model<IInstructor>('Instructor', InstructorSchema);

export default Location;
