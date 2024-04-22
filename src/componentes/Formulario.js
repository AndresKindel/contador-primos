import React, { useState } from 'react';

function Formulario({ onSubmit }) {
  const [valorInput, setValorInput] = useState("");

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputNumero = parseInt(valorInput, 10);

    if (isNaN(inputNumero) || inputNumero < 1) {
        alert("Por favor digite um número positivo maior que 1.");
        return;
    }

    onSubmit(inputNumero);
  };

  return (
    <form onSubmit={handleSubmit} className="caixa">
      <h2>Digite um número inteiro positivo:</h2>
      <input
        type="number"
        value={valorInput}
        onChange={handleChange}
      />
      <button type="submit" className="botao">Calcular</button>
    </form>
  );
}

export default Formulario;
