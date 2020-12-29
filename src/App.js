import './App.css';
import imagemPerfil from './assets/eu.JPG';
import logoGithub from './assets/github.png';
import logoLinkedin from './assets/linkedin.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<button className="App-body-button">Deixar uma mensagem</button>*/}
        <div className="App-header-contato">
          <a
            href={"https://github.com/alexsouzasilvax/"}
            target='blank'
          >
            <img
              src={logoGithub}
              width='50px'
              height='50px'
              alt='logo github'
            />
          </a>

          <a
            href={"https://www.linkedin.com/in/alexsouzasilvax/"}
            target='blank'
          >
            <img
              src={logoLinkedin}
              width='26px'
              height='26px'
              alt='logo linkedin'
            />
          </a>
        </div>
      </header>
      <div className="App-divisao"></div>
      <div className="App-body-Imagem">
        <div>
          <div className="App-body-Imagem-divImagem">
            <img className="App-body-Imagem-divImagem-imagem" src={imagemPerfil} alt="Alex Silva" />
          </div>
          <div className="App-body-Imagem-divImagem2">
          </div>
        </div>
      </div>

      <div className="App-body-divInfo">
        <div className="App-body-info">
          <h1>Alex Souza da Silva</h1>
          <p className="App-body-info-subtitle">Programador FullStack</p>
          <p className="App-body-info-description">Java | Spring | PL/SQL | React | React-Native | Expo | Oracle | MySql | Postgre SQL | Glassfish | Tomcat | WildFly</p>
        </div>
      </div>
    </div>
  );
}

export default App;
