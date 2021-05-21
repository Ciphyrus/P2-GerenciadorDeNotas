import React from 'react';
import './Login.css';

const CaixaDeTexto = ({ tipoCaixa, nomeCaixa, idCaixa, aoMudar }) => {
    return (
        <input
            type={tipoCaixa}
            name={nomeCaixa}
            id={idCaixa}
            onChange={aoMudar}
            className="login-caixa"
            placeholder={nomeCaixa}
        />
    );
}

export default CaixaDeTexto;