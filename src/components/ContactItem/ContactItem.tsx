import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from '../../hooks';

import { Item } from './ContactItem.styled';
import { Button, Card, Popconfirm } from 'antd';
import { DeleteTwoTone, EditTwoTone } from '@ant-design/icons';
import { UpdateForm } from '../UpdateForm';

import { deleteContact, type Contact } from '../../redux/contacts';
import type { AppDispatch } from '../../redux';

interface ContactItemProps {
  contact: Contact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const { isLoading } = useContacts();
  const dispatch = useDispatch<AppDispatch>();
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <Item
      actions={[
        <Popconfirm
          key="delete"
          title="Delete contact"
          description="Are you sure to delete this contact?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => dispatch(deleteContact(contact.id))}
        >
          <Button
            type="dashed"
            htmlType="button"
            aria-label="delete contact"
            loading={isLoading}
          >
            <DeleteTwoTone />
          </Button>
        </Popconfirm>,
        <Button
          key="update"
          type="dashed"
          htmlType="button"
          aria-label="update contact"
          loading={isLoading}
          onClick={() => setIsFormOpen(true)}
        >
          <EditTwoTone />
        </Button>,
      ]}
    >
      <Card.Meta title={contact.name} description={contact.number} />
      <UpdateForm
        contactId={contact.id}
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </Item>
  );
};

export default ContactItem;
