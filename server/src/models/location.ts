import mongoose, { Schema, Document } from 'mongoose';

export interface ILocation extends Document {
  name: string;
  address: string;
}

const LocationSchema: Schema = new Schema<ILocation>({
  name: { type: String, required: true },
  address: { type: String, required: true },
});

const Location = mongoose.model<ILocation>('Location', LocationSchema);

export default Location;
