import axios from 'axios';
import { FitnessClass } from '../types/fitnessClass';

// interface FilterProps {
//   date: Date;
//   selectedLocation: string;
//   selectedInstructor: string;
//   selectedClassType: string;
// }

export const getFitnessClasses = async (): Promise<FitnessClass[]> => {
  try {
    const response = await axios.get('/api/fitnessClasses');
    return response.data;
  } catch (err) {
    console.error('Failed to fetch classes', err);
    throw new Error('Failed to fetch classes');
  }
};
