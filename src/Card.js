import React from 'react';
import Botao from './Botao';

const Card = ({nota, aoClicar}) => (
    <div>
        <Botao msgBotao={nota.title} aoClicar={aoClicar(nota.id)} nomeClasse="login-botao" />
    </div>
)

export default Card;