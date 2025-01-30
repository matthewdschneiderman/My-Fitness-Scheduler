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

const DateRangeSelector = ({
  startDate = '1/1/25',
  endDate = '1/2/25',
  onPrev = null,
  onNext = null,
}) => (
  <DateSelector>
    <ArrowButton
      onClick={onPrev}
      aria-label='Previous Date'
    >
      &lt;
    </ArrowButton>
    <DateDisplay>{`${startDate} – ${endDate}`}</DateDisplay>
    <ArrowButton
      onClick={onNext}
      aria-label='Next Date'
    >
      &gt;
    </ArrowButton>
  </DateSelector>
);

export default DateRangeSelector;
