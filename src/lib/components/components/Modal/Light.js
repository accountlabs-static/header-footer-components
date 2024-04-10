import styled from 'styled-components';
import Modal from '.';

export const LightModal = styled(Modal).attrs({
  theme: 'light',
  maskTheme: 'dark',
})`
  > .modal-container {
    background: white;
  }
`;
