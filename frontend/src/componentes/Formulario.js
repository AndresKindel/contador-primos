import React, { useState } from 'react';

function Formulario({ onSubmit }) {
  const [valorInput, setValorInput] = useState("");

  const handleChange = (event) => {
    setValorInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!/^\d+$/.test(valorInput)) {
      alert("Por favor digite um número inteiro.");
      return;
    }
    const inputNumero = parseInt(valorInput, 10);

    if(inputNumero > 1000000000) {
      alert("Por favor digite um número inteiro positivo menor que 1 bilhão.");
      return;
    }

    if (isNaN(valorInput) || inputNumero <= 1 || !Number.isInteger(inputNumero)) {
        alert("Por favor digite um número inteiro positivo maior que 1.");
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
