import { FitnessSchedule } from '../types/schedule';

export function validateScheduleInput(
  schedule: Partial<FitnessSchedule> | undefined
): string | null {
  if (!schedule) return 'Schedule data is required';

  const { title, date, time } = schedule;

  if (title && title.trim() === '') return 'Title cannot be empty';
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) return 'Date must be in YYYY-MM-DD format';
  if (time && !/^\d{2}:\d{2}$/.test(time)) return 'Time must be in HH:mm format';

  return null;
}
