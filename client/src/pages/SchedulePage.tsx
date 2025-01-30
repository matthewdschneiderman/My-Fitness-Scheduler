import DateRangeSelector from '../components/DateRangeSelector';
import FilterSection from '../components/FilterSection';
import ScheduleList from '../components/ScheduleList';
const SchedulePage = () => {
  return (
    <>
      <FilterSection />
      <DateRangeSelector />
      <ScheduleList />;
    </>
  );
};

export default SchedulePage;
