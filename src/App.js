import './App.css';
import FormInscricao from './components/FormInscricao/FormInscricao';
import FormEncomenda from './components/FormEncomenda/FormEncomenda';

const App =() => {

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
          <button>Faça seu cadastro</button>
        </span>
        <span>
          <h3>Já tem cadastro?</h3>
          <button>Faça sua encomenda</button>
        </span>

      </div>
      <div>
          <footer className='footer'>
        <h4>Footer</h4>
          </footer>
      </div>
  </div>

);
}

export default App;
