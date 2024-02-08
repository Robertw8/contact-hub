import { useContacts } from '../../hooks';
import { useDispatch } from 'react-redux';

import {
  UpdateFormWrapper,
  StyledUpdateForm,
  StyledSubmitButton,
  CloseButton,
} from './UpdateForm.styled';
import { CloseOutlined } from '@ant-design/icons';
import { Toaster } from 'react-hot-toast';
import FormItem from 'antd/es/form/FormItem';
import { Input } from 'antd';

import { updateContact } from '../../redux/contacts/operations';
import { successToast, errorToast } from '../../utils/toast';
import type { AppDispatch } from '../../redux';

interface UpdateFormProps {
  contactId: string;
  isOpen: boolean;
  onClose: () => void;
}

const UpdateForm: React.FC<UpdateFormProps> = ({
  contactId,
  isOpen,
  onClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { contacts, isLoading } = useContacts();

  const handleSubmit = values => {
    const { newName, newNumber } = values;

    const isDuplicate = contacts.find(
      contact =>
        contact.name.toLowerCase() === newName.toLowerCase() ||
        contact.number === newNumber
    );

    if (isDuplicate) {
      errorToast('This contact already exists');
      return;
    }

    dispatch(updateContact({ contactId, name: newName, number: newNumber }));
    successToast('Contact updated!');
  };

  return (
    <>
      <UpdateFormWrapper isOpen={isOpen}>
        <CloseButton htmlType="button" type="text" onClick={onClose}>
          <CloseOutlined />
        </CloseButton>
        <StyledUpdateForm onFinish={handleSubmit}>
          <FormItem name="newName">
            <Input placeholder="Enter new name..." autoComplete="password" />
          </FormItem>
          <FormItem name="newNumber">
            <Input
              placeholder="Enter new phone number..."
              autoComplete="password"
            />
          </FormItem>
          <StyledSubmitButton htmlType="submit" loading={isLoading}>
            Update
          </StyledSubmitButton>
        </StyledUpdateForm>
      </UpdateFormWrapper>
      <Toaster />
    </>
  );
};

export default UpdateForm;
