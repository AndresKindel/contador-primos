import React from 'react';

const ResultadoContagemPrimos = ({ numero, contagemPrimos, tempoCalculo }) => {
  return (
    <div id="resultado" className="caixa">
        <p>Número de primos entre 0 e {numero}: {contagemPrimos}</p>
        <p>Tempo de cálculo: {tempoCalculo}ms</p>
    </div>
  );
};

export default ResultadoContagemPrimos;
