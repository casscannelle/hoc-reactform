import React, { useState } from 'react';

const withModal = (WrappedComponent) => {
  return (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <>
        <WrappedComponent
          {...props}
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              {/* Adicione aqui o conteúdo do modal */}
            </div>
          </div>
        )}
      </>
    );
  };
};

export default withModal;
