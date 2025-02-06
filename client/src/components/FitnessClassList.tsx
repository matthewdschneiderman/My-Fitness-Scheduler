import { FitnessClass } from '../types/fitnessClass';

interface ScheduleListProps {
  schedules: FitnessClass[];
  error?: string | null;
}

const ScheduleList: React.FC<ScheduleListProps> = ({ schedules, error }) => {
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
