import styled from '@emotion/styled';
import { Button, Form } from 'antd';

const UpdateFormWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
  padding: 50px 20px 20px 20px;

  transition-duration: 150ms;
  background-color: #fff;
  overflow-y: auto;

  z-index: ${({ isOpen }) => (isOpen ? 100 : -1)};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};

  &::-webkit-scrollbar {
    max-width: 6px;
  }

  &::-webkit-scrollbar-track {
    margin: 10px 0;
    background: transparent;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #09bc8a66;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #09bc8a;
  }
`;

const StyledUpdateForm = styled(Form)`
  max-width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const StyledSubmitButton = styled(Button)`
  align-self: flex-end;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10%;
  right: 5%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export { UpdateFormWrapper, StyledUpdateForm, StyledSubmitButton, CloseButton };
