import DateRangeSelector from '../components/DateRangeSelector';
import FilterSection from '../components/FilterSection';
import ScheduleList from '../components/ScheduleList';
import { useState } from 'react';

const SchedulePage = () => {
  const [startDate, setStartDate] = useState(new Date());

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

  return (
    <>
      <FilterSection />
      <DateRangeSelector
        startDate={startDate.toDateString()}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      <ScheduleList />;
    </>
  );
};

export default SchedulePage;
