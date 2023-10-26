import React, { useState } from "react";
import { ContactForm } from "../ContactForm/ContactForm";
import { Modal } from "antd";

export const ContactModal = ({ isOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} />;
};
