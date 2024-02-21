import React, { useState } from 'react';
import Modal from 'react-modal';

const withModal = (WrappedComponent) => {
  return function WithModalHOC(props) {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => {
      setModalAberto(true);
    };

    const fecharModal = () => {
      setModalAberto(false);
    };

    return (
      <div>
        <WrappedComponent
          {...props}
          abrirModal={abrirModal}
          fecharModal={fecharModal}
        />

        <Modal isOpen={modalAberto} onRequestClose={fecharModal}>
          <WrappedComponent.FormularioModal onClose={fecharModal} />
        </Modal>
      </div>
    );
  };
};

export default withModal;