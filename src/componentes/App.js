import React, { useState } from 'react';
import './ResultadoContagemPrimos.css';
import './Formulario.css';
import './Historico.css';
import ResultadoContagemPrimos from './ResultadoContagemPrimos.js';
import Formulario from './Formulario.js';
import Historico from './Historico.js';

function App() {
  const [numero, setNumero] = useState("");
  const [contagemPrimos, setContagemPrimos] = useState(null);
  const [tempoCalculo, setTempoCalculo] = useState(null);

  const fetchContagem = (inputNumero) => {
    setNumero(inputNumero);
    fetch(`http://localhost:8080/contarPrimos?n=${inputNumero}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setContagemPrimos(dados.contagemPrimos);
        setTempoCalculo(dados.tempoCalculo);
      })
      .catch((erro) => {
        console.error('Erro ao buscar contagem de primos:', erro);
      });
  };

  return (
    <main>
      <h1>Contador de Números Primos</h1>
      <Formulario onSubmit={fetchContagem} />
      {contagemPrimos && (
        <ResultadoContagemPrimos 
          contagemPrimos={contagemPrimos}
          numero={numero}
          tempoCalculo={tempoCalculo}
        />
      )}
      {contagemPrimos && <Historico />}
    </main>
  );
}


export default App;
