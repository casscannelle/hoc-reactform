import { useState } from 'react';

const useCustomForm = () => {
  const [FormInscricao, setFormInscricao] = useState({});
  const [FormEncomenda, setFormEncomenda] = useState({});

  //digitando nos inputs
  const handleFormInscricaoChange = (e) => {
    setFormInscricao({ ...FormInscricao, [e.target.name]: e.target.value });
  };

  const handleFormEncomendaChange = (e) => {
    setFormEncomenda({ ...FormEncomenda, [e.target.name]: e.target.value });
  };

  //envio dos forms
  const handlesubmitFormInscricao = (event) => {
    event.preventDefault();
    console.log('Formulario enviado com as respostas:', FormInscricao);
  };

  const handlesubmitFormEncomenda = (event) => {
    event.preventDefault();
    console.log('Formulario enviado com as respostas:', FormEncomenda);
  };

  return {
    FormInscricao,
    FormEncomenda,
    handleFormInscricaoChange,
    handleFormEncomendaChange,
    submitFormInscricao,
    submitFormEncomenda,
  };
};

export default useCustomForm;
