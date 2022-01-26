import { Component } from 'react';
import { createPortal } from 'react-dom';

import IconButton from '../Utils/IconButton/IconButton';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ModalContainer, Overlay } from './Modal.styled';

const ModalRoot = document.querySelector('#modal-root');

class ModalWindow extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeKeydown);
  }

  onEscapeKeydown = e => e.code === 'Escape' && this.props.toggleModal();

  render() {
    const { toggleModal, children } = this.props;

    return createPortal(
      <Overlay onClick={e => e.currentTarget === e.target && toggleModal()}>
        <ModalContainer>{children}</ModalContainer>
        <IconButton
          onClick={toggleModal}
          icon={<AiOutlineCloseCircle />}
          dataAction="close"
        />
      </Overlay>,
      ModalRoot,
    );
  }
}

export default ModalWindow;
