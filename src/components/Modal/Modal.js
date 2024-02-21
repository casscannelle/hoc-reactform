import React, { useState } from 'react';
import FormEncomenda from '../FormEncomenda/FormEncomenda';
import FormInscricao from '../FormInscricao/FormInscricao';

const Modal = () => {
    const [isCadastroModalOpen, setIsCadastroModalOpen] = useState(false);
    const [isEncomendaModalOpen, setIsEncomendaModalOpen] = useState(false);
  
    const openCadastroModal = () => {
      setIsCadastroModalOpen(true);
    };
  
    const closeCadastroModal = () => {
      setIsCadastroModalOpen(false);
    };
  
    const openEncomendaModal = () => {
      setIsEncomendaModalOpen(true);
    };
  
    const closeEncomendaModal = () => {
      setIsEncomendaModalOpen(false);
    };
  
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
            <button className='btn' onClick={ () => {openCadastroModal(); closeEncomendaModal()}}>Faça seu cadastro</button>
          </span>
          <span>
            <h3>Já tem cadastro?</h3>
            <button className='btn' onClick={ () => {openEncomendaModal(); closeCadastroModal()}}>Faça sua encomenda</button>
          </span>
  
        </div>
        {/* Modais */}
        {isCadastroModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Faça seu cadastro</h2>
              <FormInscricao />
              <button className='btn-modal' onClick={closeCadastroModal}>Fechar</button>
            </div>
          </div>
        )}
  
        {isEncomendaModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>Faça sua encomenda</h2>
              <FormEncomenda />
              <button className='btn-modal' onClick={closeEncomendaModal}>Fechar</button>
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