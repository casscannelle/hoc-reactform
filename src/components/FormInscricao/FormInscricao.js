import { useState } from 'react';
import React from 'react';
import useSort from '../useSort/useSort';


function FormInscricao() {
  const [inputValue, setInputValue] = useState({ nome: '', email: '', idade: '', gender: 'Feminino' });
  const [showAnswers, setShowAnswers] = useState(false);
  const [errors, setErrors] = useState({});
  const [responses, setResponses] = useState([]);
  const [selectedResponse, setSelectedResponse] = useState(null);
  const { sortOrder, toggleSortOrder, toggleAlphabeticOrder } = useSort('newest');
  
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prevInputValue) => ({ ...prevInputValue, [name]: value }));
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setShowAnswers('loading');
  
      setTimeout(() => {
      // Atualizar lista de respostas
      const newResponse = { ...inputValue, timestamp: new Date() };
      setResponses((prevResponses) => [newResponse, ...prevResponses]);
  
      setShowAnswers(true);
      // Limpar o formulário
      setInputValue({ nome: '', email: '', idade: '', gender: 'Feminino' });
    }, 2000);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (inputValue.nome.length < 3) {
      errors.nome = 'Por favor, digite seu nome';
    }
    if (inputValue.idade.length === 0) {
      errors.idade = 'Por favor, digite sua idade';
    }
    if (!inputValue.email.includes('@')) {
      errors.email = 'Digite um e-mail válido';
    }
    if (!inputValue.gender) {
      errors.gender = 'Por favor, selecione um gênero';
    }
    return errors;
  };

  const hideAnswers = (event) => {
    event.preventDefault();
    setShowAnswers(false);
    setErrors({});
  };

  const showResponseModal = (response) => {
    setSelectedResponse(response);
  };

  const hideModal = () => {
    setSelectedResponse(null);
  };

 
  const getSortedResponses = () => {
    if (sortOrder === 'newest') {
      return [...responses].sort((a, b) => b.timestamp - a.timestamp);
    } else if (sortOrder === 'oldest') {
      return [...responses].sort((a, b) => a.timestamp - b.timestamp);
    } else if (sortOrder === 'alphabetic') {
      return [...responses].sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (sortOrder === 'reverseAlphabetic') {
      return [...responses].sort((a, b) => b.nome.localeCompare(a.nome));
    }
  };


  const deleteAnswer = (index) => {
    const updatedResponses = [...responses];
    updatedResponses.splice(index, 1);
    setResponses(updatedResponses);
  }

  //editar a resposta
  const editAnswer = (response) => {
    hideModal(); 
    setInputValue({
      nome: response.nome,
      email: response.email,
      idade: response.idade,
      gender: response.gender,
    });

    // Deleta a resposta original
    const updatedResponses = [...responses];
    const indexToDelete = responses.findIndex((item) => item === response);
    if (indexToDelete !== -1) {
      updatedResponses.splice(indexToDelete, 1);
      setResponses(updatedResponses);
    }
  };

  return (
    <div className='container-wrapper'>
      <div className='container-form'>
        <form>
        <div>
        <label>Nome:</label>
        <input className='form_input' type="text" name="nome" value={inputValue.nome} onChange={handleChange} required />
        {showAnswers || !errors.nome ? null : <p className="error-message">{errors.nome}</p>}
        </div>
        <div>
        <label>E-mail:</label>
        <input className='form_input' type="email" name="email" value={inputValue.email} onChange={handleChange} required />
        {showAnswers || !errors.email ? null : <p className="error-message">{errors.email}</p>}
        </div>
        <div>
        <label>Idade:</label>
        <input className='form_input' type="number" name="idade" value={inputValue.idade} onChange={handleChange} min="0" required />
        {showAnswers || !errors.idade ? null : <p className="error-message">{errors.idade}</p>}
        </div>
        <div>
        <label>Gênero</label>
        <div>
          <input type='radio' name="gender" value="Feminino" id="feminino" checked={inputValue.gender === "Feminino"} onChange={handleChange} />
          <label htmlFor="feminino">Feminino</label>
        </div>
        <div>
          <input type='radio' name="gender" value="Masculino" id="masculino" checked={inputValue.gender === "Masculino"} onChange={handleChange} />
          <label htmlFor="masculino">Masculino</label>
        </div>
        <div>
          <input type='radio' name="gender" value="Não informado" id="naoinformado" checked={inputValue.gender === "Não informado"} onChange={handleChange} />
          <label htmlFor="naoinformado">Prefiro não informar</label>
        </div>
        {showAnswers || !errors.gender ? null : <p className="error-message">{errors.gender}</p>}
        </div>
        <div>
        <button className='btn-submit' type="submit" onClick={handleSubmit}>
        {showAnswers === 'loading' ? 'Enviando' : 'Enviar'}
          </button>
        </div>
        </form>
      </div>
      
      {/* Respostas por nome */}
      <div className={`container-answer ${showAnswers ? '' : 'hide-container-answer'}`}>
        {showAnswers && (
          <div>
            <>
            <h2>Respostas</h2>
            <div>
              <button className="btn-filter" onClick={toggleSortOrder}>
                {sortOrder === 'newest' ? 'Mais recentes' : 'Mais antigas'}
              </button>
            </div>
            <div>
              <button className="btn-filter" onClick={toggleAlphabeticOrder}>
                {sortOrder === 'alphabetic' ? 'A-Z' : 'Z-A'}
              </button>
            </div>
            </>
            <ol>
              {getSortedResponses().map((response, index) => (
                <li key={index} >
                  {response.nome} 
                  <button className="btn-vermais" onClick={() => showResponseModal(response)}>Ver mais</button>
                  <button className="btn-vermais" onClick={() => deleteAnswer(index)}>Excluir</button>
                </li>
              ))}
            </ol>
            <button className='btn' onClick={hideAnswers}>
              Fechar
            </button>
          </div>
        )}
      </div>


      {/* Modal com respostas completas */}
      {selectedResponse && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={hideModal}>
              &times;
            </span>
            <h2>Detalhes da Resposta</h2>
            <p>
              <strong>Nome:</strong> {selectedResponse.nome}
            </p>
            <p>
              <strong>Idade:</strong> {selectedResponse.idade}
            </p>
            <p>
              <strong>E-mail:</strong> {selectedResponse.email}
            </p>
            <p>
              <strong>Gênero:</strong> {selectedResponse.gender}
            </p>
            <button className="btn" onClick={() => editAnswer(selectedResponse)}>Editar</button>
            <button className="btn" onClick={hideModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FormInscricao;