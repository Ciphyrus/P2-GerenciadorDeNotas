import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

import Botao from './Botao';
import CaixaDeTexto from './CaixaDeTexto';

const initialValue = {
    id: 0,
    userName: '',
    password:''
};

const PageLogin = () => {
    const [ caixaValues, setCaixaValues ] = useState(initialValue);
    const [ bdValues, setBdValues ] = useState(initialValue);
    const [ msgErro, setMsgErro ] = useState();
    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/users`)
            .then((response) => {
                setBdValues(response.data);
            }
        );
    }, []);

    function onchange(ev) {
        const { name, value } = ev.target;

        setCaixaValues({ ...caixaValues, [name]: value });
    }

    const logar = () => {

        console.log("user:" + caixaValues.userName);
        console.log("pass:" + caixaValues.password);

        for (var i = 0; i < bdValues.length; i++) {
            if (bdValues[i].userName === caixaValues.userName &&
                bdValues[i].password === caixaValues.password) {
                    caixaValues.id = bdValues[i].id;
                }
        }

        if (caixaValues.id !== 0){
            console.log("notas");
            history.push(`nota/${caixaValues.id}`);
        } else {
            setMsgErro("Login ou Senha incorreto!");
        }
    }

    if (msgErro) {
        return (
            <div className="login-grupo" >

                <div className="login-erro">{ msgErro }</div>

                <CaixaDeTexto 
                    tipoCaixa="text" 
                    nomeCaixa="userName" 
                    idCaixa="userName"
                    aoMudar={onchange}
                />
                <CaixaDeTexto
                    tipoCaixa="password"
                    nomeCaixa="password"
                    idCaixa="password"
                    aoMudar={onchange}
                />
                <Botao msgBotao="Login" aoClicar={logar} nomeClasse="login-botao" />
            </div>
            
        );
    }

    return(
        <div className="login-grupo" >

            <CaixaDeTexto 
                tipoCaixa="text" 
                nomeCaixa="userName" 
                idCaixa="userName"
                aoMudar={onchange}
            />
            <CaixaDeTexto
                tipoCaixa="password"
                nomeCaixa="password"
                idCaixa="password"
                aoMudar={onchange}
            />
            <Botao msgBotao="Login" aoClicar={logar} />
        </div>
    )
}

export default PageLogin;