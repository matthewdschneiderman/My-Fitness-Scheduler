import { useState, useEffect } from 'react';
import { getSchedules } from '../api/schedules';
import { Schedule } from '../types/schedule';

const ScheduleList: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const data = await getSchedules();
        setSchedules(data);
      } catch {
        setError('Unable to fetch Schedules');
      }
    };

    fetchSchedules();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Fitness Schedules</h1>
      {schedules.length === 0 ? (
        <p>No Schedules Available</p>
      ) : (
        <ul>
          {schedules.map((schedule) => (
            <li key={schedule.id}>
              <h2>{schedule.title}</h2>
              <p>{schedule.description}</p>
              <p>{schedule.date}</p>
              <p>{schedule.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScheduleList;
