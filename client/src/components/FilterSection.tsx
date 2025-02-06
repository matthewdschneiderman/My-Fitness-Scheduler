import styled from 'styled-components';

const Dropdown = styled.select`
  background-color: ${({ theme }) => theme.colors.light};
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1rem;
`;

interface FilterSectionProps {
  selectedLocation: string;
  selectedClassType: string;
  selectedInstructor: string;
  onFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  selectedLocation,
  selectedClassType,
  selectedInstructor,
  onFilterChange,
}) => (
  <div>
    <Dropdown
      value={selectedLocation}
      onChange={onFilterChange}
      name='selectedLocation'
    >
      <option value=''>Locations</option>
      <option value='Chelsea'>Chelsea</option>
      <option value='Flatiron'>Flatiron</option>
      <option value='Brookyln'>Brookyln</option>
      <option value='Stamford, Ct'>Stamford, Ct</option>
    </Dropdown>{' '}
    <Dropdown
      value={selectedClassType}
      name='selectedClassType'
      onChange={onFilterChange}
    >
      <option value=''>Select Class Type</option>
      <option value='type1'>Class Type 1</option>
      <option value='type2'>Class Type 2</option>
    </Dropdown>{' '}
    <Dropdown
      value={selectedInstructor}
      onChange={onFilterChange}
      name='selectedInstructor'
    >
      <option value=''>Select Instructor</option>
      <option value='instructor1'>Instructor 1</option>
      <option value='instructor2'>Instructor 2</option>
    </Dropdown>
  </div>
);

export default FilterSection;
