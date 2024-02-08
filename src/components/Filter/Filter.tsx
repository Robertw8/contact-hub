import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks';

import { FilterWrapper, StyledFilterInput } from './Filter.styled';

import { setFilter } from '../../redux/contacts';
import type { AppDispatch } from '../../redux';

const Filter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filter } = useContacts();

  const handleChange = ({ target }) => {
    const value = target.value;
    dispatch(setFilter(value));
  };

  return (
    <FilterWrapper>
      <StyledFilterInput
        placeholder="Search contacts..."
        value={filter}
        onChange={handleChange}
      />
    </FilterWrapper>
  );
};

export default Filter;
