import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks';

import {
  StyledFormItem,
  StyledInput,
  StyledSubmitButton,
} from '../LoginForm/LoginForm.styled';
import { StyledContactForm } from './ContactForm.styled';

import { addContact } from '../../redux/contacts';
import { successToast, errorToast } from '../../utils';
import type { AppDispatch } from '../../redux';

const ContactForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contacts, isLoading } = useContacts();

  const handleSubmit = values => {
    const { name, number } = values;

    const isDuplicate = contacts.find(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );

    if (isDuplicate) {
      errorToast('This contact already exists');
      return;
    }

    dispatch(addContact({ name, number }));
    successToast('Contact added!');
  };

  return (
    <>
      <StyledContactForm name="basic" onFinish={handleSubmit}>
        <StyledFormItem
          name="name"
          rules={[{ required: true, message: 'Please enter name!' }]}
        >
          <StyledInput
            placeholder="Enter name..."
            autoComplete="new-password"
          />
        </StyledFormItem>
        <StyledFormItem
          name="number"
          rules={[{ required: true, message: 'Please enter phone number!' }]}
        >
          <StyledInput
            placeholder="Enter phone number..."
            autoComplete="new-password"
          />
        </StyledFormItem>
        <StyledSubmitButton
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Add contact
        </StyledSubmitButton>
      </StyledContactForm>
    </>
  );
};

export default ContactForm;
