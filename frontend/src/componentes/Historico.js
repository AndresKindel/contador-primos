import React, { useEffect, useState } from 'react';

function Historico() {

    const [mostrarHistorico, setMostrarHistorico] = useState(false);
    const [historico, setHistorico] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setMostrarHistorico(!mostrarHistorico);
      };

    useEffect(() => {
        const fetchHistorico = () => {
          fetch('http://localhost:8080/respostas')
            .then((resposta) => resposta.json())
            .then((dados) => {
              setHistorico(dados);
            })
            .catch((erro) => {
              console.error('Erro ao buscar dados do histórico:', erro);
            });
        };

        fetchHistorico();

        const intervalo = setInterval(fetchHistorico, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const limparHistorico = () => {
        const confirmacao = window.confirm('Tem certeza de que deseja limpar o histórico?');

        if (confirmacao) {
            fetch('http://localhost:8080/respostas', {
            method: 'DELETE',
            })
            .then(() => {
                setHistorico([]);
            })
            .catch((erro) => {
                console.error('Erro ao limpar o histórico:', erro);
            });
        }
      };

    return (
        <div id="historico">
            <form id="form-historico" onSubmit={handleSubmit}>
                <button id="botao-historico" type="submit" className="botao">Histórico</button>
            </form>
            <aside id="historico-conteudo" className={mostrarHistorico ? "mostrar" : "esconder"}>
                <h2>Histórico</h2>
                <div>
                    {historico.map((item, index) => (
                        <div key={index} className="historico-item">
                            <p className="consulta">Consulta {index + 1}</p>
                            <p>Número de primos entre 0 e {item.numero}: {item.contagemPrimos}</p>
                            <p>Tempo de cálculo: {item.tempoCalculo}ms</p>
                        </div>
                    ))}
                </div>
                <button type="button" onClick={limparHistorico} className="botao">Limpar Histórico</button>
            </aside>
        </div>
    );
}

export default Historico;
