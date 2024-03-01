import React, { useState } from 'react';
import FormEncomenda from '../FormEncomenda/FormEncomenda';
import FormInscricao from '../FormInscricao/FormInscricao';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
};

const Modal = () => {
  const cadastroModal = useModal();
  const encomendaModal = useModal();

  return (
    <div className="App">
      <div>
        {/* Dados da página */}
        <header className="App-header">
          <h1>LOGO</h1>
        </header>
      </div>
      <div className="content">
        <h2>Título</h2>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <span>
          <h3>É novo por aqui?</h3>
          <button className='btn' onClick={() => { cadastroModal.openModal(); encomendaModal.closeModal(); }}>Faça seu cadastro</button>
        </span>
        <span>
          <h3>Já tem cadastro?</h3>
          <button className='btn' onClick={() => { encomendaModal.openModal(); cadastroModal.closeModal(); }}>Faça sua encomenda</button>
        </span>
      </div>
      
      {/* Modais */}
      {cadastroModal.isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Faça seu cadastro</h2>
            <FormInscricao />
            <button className='btn-modal-fechar' onClick={cadastroModal.closeModal}>Fechar</button>
          </div>
        </div>
      )}

      {encomendaModal.isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className='btn-modal-fechar' onClick={encomendaModal.closeModal}>×</button>
            <h2>Faça sua encomenda</h2>
            <FormEncomenda />
            
          </div>
        </div>
      )}

      <div>
        <footer className='footer'>
          <h4>Footer</h4>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
