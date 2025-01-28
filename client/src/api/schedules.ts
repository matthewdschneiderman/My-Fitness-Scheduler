import axios from 'axios';
import { Schedule } from '../types/schedule';

export const getSchedules = async (): Promise<Schedule[]> => {
  try {
    const response = await axios.get('/api/schedules');
    return response.data;
  } catch (err) {
    console.error('Failed to fetch schedules', err);
    throw new Error('Failed to fetch schedules');
  }
};
