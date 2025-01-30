import styled from 'styled-components';

const Dropdown = styled.select`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
`;

const FilterSection = () => (
  <div>
    <Dropdown>
      <option>Locations</option>
    </Dropdown>{' '}
    <Dropdown>
      <option>Class Types</option>
    </Dropdown>{' '}
    <Dropdown>
      <option>Instructors</option>
    </Dropdown>
  </div>
);

export default FilterSection;
