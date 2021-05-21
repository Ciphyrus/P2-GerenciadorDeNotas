import React from 'react';
import './Login.css';

const Botao = ({ msgBotao, aoClicar, nomeClasse }) => {
    return (
        <button onClick={ aoClicar } className={nomeClasse}>
            {msgBotao}
        </button>
    )
}

export default Botao;