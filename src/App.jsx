// import logo from './logo.svg';
import  { useState } from 'react';
import './App.css';



function App() {
//armazena o texto digitado na busca
  const [busca, setBusca] = useState([]); 
  
  
  //lista 

  const livros = [
    "O Deus que destroi sonhos",
    "O poder da garota que ora",
    "É assim que acaba",
    "Eu e esse meu coração",
    "A rainha vermelha",

  ];
  //filtra os livros 
  const livrosFiltrados= livros.filter((livro))=>






  return (
    <div className="App">
      <header className="header">
        <h1>
          biblioteca-tecnica
        </h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pesquisar Livros
        </a>
      </header>
    </div>
  );
}

export default App;
