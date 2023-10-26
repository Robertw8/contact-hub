import { useSelector } from "react-redux";
import { selectContacts, selectIsLoading } from "../redux/contacts/selectors";

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  return {
    contacts,
    isLoading,
  };
};
