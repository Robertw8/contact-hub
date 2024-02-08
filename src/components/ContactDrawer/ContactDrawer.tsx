import { ContactForm } from '../ContactForm';
import { Drawer, type DrawerProps } from 'antd';

const ContactDrawer: React.FC<DrawerProps> = ({ open, title, onClose }) => {
  return (
    <Drawer title={title} width={300} onClose={onClose} open={open}>
      <ContactForm />
    </Drawer>
  );
};

export default ContactDrawer;
