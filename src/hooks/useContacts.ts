import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectIsLoading,
} from '../redux/contacts/selectors';
import { selectError } from '../redux/auth';

const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  return {
    contacts,
    isLoading,
    error,
    filter,
  };
};

export default useContacts;
