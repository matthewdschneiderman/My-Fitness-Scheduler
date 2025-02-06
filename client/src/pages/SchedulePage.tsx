import DateRangeSelector from '../components/DateRangeSelector';
import FilterSection from '../components/FilterSection';
import FitnessClassList from '../components/FitnessClassList';
import { useState, useEffect } from 'react';
import { getFitnessClasses } from '../api/fitnessClass';
import { FitnessClass } from '../types/fitnessClass';

interface Filters {
  date: Date;
  selectedLocation: string;
  selectedInstructor: string;
  selectedClassType: string;
}

const SchedulePage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [fitnessClasses, setFitnessClasses] = useState<FitnessClass[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<Filters>({
    date: startDate,
    selectedLocation: '',
    selectedInstructor: '',
    selectedClassType: '',
  });

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const data = await getFitnessClasses();
        setFitnessClasses(data);
      } catch {
        setError('Unable to fetch Schedules');
      }
    };

    fetchSchedules();
  }, [filters]);

  const handlePrev = () => {
    setStartDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNext = () => {
    setStartDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  useEffect(() => {
    console.log('data changed');
  }, [startDate]);

  return (
    <>
      <FilterSection
        selectedLocation={filters.selectedLocation}
        selectedClassType={filters.selectedClassType}
        selectedInstructor={filters.selectedInstructor}
        onFilterChange={(e) => setFilters({ ...filters, [e.target.name]: e.target.value })}
      />
      <DateRangeSelector
        startDate={startDate.toDateString()}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <FitnessClassList
        schedules={fitnessClasses}
        error={error}
      />
      ;
    </>
  );
};

export default SchedulePage;
