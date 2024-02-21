import React, { Component } from 'react';

// HOC para validar nome
const withNomeValidation = (WrappedComponent) => {
  return class WithNomeValidation extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nome: '',
        isValidNome: false,
        errorNome: '',
      };
    }

    validateNome = (nome) => {
      this.setState({
        nome,
        isValidNome: nome.length > 3,
        errorNome: nome.length < 3 ? 'Por favor, digite um nome com mais de 3 caracteres' : '',
      });
    };

    clearNome = () => {
      this.setState({
        nome: '',
        isValidNome: false,
        errorNome: '',
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          nome={this.state.nome}
          isValidNome={this.state.isValidNome}
          errorNome={this.state.errorNome}
          validateNome={this.validateNome}
          clearNome={this.clearNome}
        />
      );
    }
  };
};

export default withNomeValidation;
