import styled from 'styled-components';

const DateSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const ArrowButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  margin: 0;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`;

const DateDisplay = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

interface DateRangeSelectorProps {
  startDate: string;
  onPrev: () => void;
  onNext: () => void;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ startDate, onPrev, onNext }) => {
  return (
    <DateSelector>
      <ArrowButton
        onClick={onPrev}
        aria-label='Previous Date'
      >
        &lt;
      </ArrowButton>
      <DateDisplay>{`${startDate}`}</DateDisplay>
      <ArrowButton
        aria-label='Next Date'
        onClick={onNext}
      >
        &gt;
      </ArrowButton>
    </DateSelector>
  );
};

export default DateRangeSelector;
