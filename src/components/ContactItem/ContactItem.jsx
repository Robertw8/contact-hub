import React, { useState } from "react";
import { Item } from "./ContactItem.styled";
import { Button, Card, Popconfirm } from "antd";
import { DeleteTwoTone, EditTwoTone } from "@ant-design/icons";
import { UpdateForm } from "../UpdateForm/UpdateForm";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { useContacts } from "../../hooks/useContacts";

export const ContactItem = ({ contact }) => {
  const { isLoading } = useContacts();
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);

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
