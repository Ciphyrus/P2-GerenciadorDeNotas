import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Botao from './Botao';
import CaixaDeTexto from './CaixaDeTexto';
import CardList from './CardList';
import './Nota.css';

const initialValue = {
    userName: ''
};

const PageNota = () => {
    const [ users, setUsers ] = useState(initialValue);
    const [ search, setSearch ] = useState('');
    const [ notas, setNotas ] = useState();
    const [ novaNota, setNovaNota ] = useState();
    const [ valoresSalvar, setValoresSalvar ] = useState();
    const [ visualizar, setVisualizar] = useState();
    const [ verNota, setVerNota] = useState();
    const { id } = useParams();
    const history = useHistory();


    useEffect(() => {
        if (id){
            axios.get(`http://localhost:5000/users/${id}`)
                .then((response) => {
                    setUsers(response.data);
                }
            );
        }
    }, []);

    useEffect(() => {
        const params = {};
        if (search){
            params.title_like = search;
        }

        if(users) {
            axios.get(`http://localhost:5000/notas?userId=${users.id}`, { params })
                .then((response) => {
                    setNotas(response.data);
                });
        }
    }, [search]);

    function onChange(ev) {
        const { name, value } = ev.target;

        setValoresSalvar({ ...valoresSalvar, [name]: value });
    }

    function salvar(ev) {
        ev.preventDefault();

        axios.post()
            .then((response) => {
                history.push(`/notas/${users.id}`);
            }
        );
    }

    function ver(ev) {
        if (visualizar === 0)
            setVisualizar(1);
        if (visualizar === 1)
            setVisualizar(0);
        setVerNota(ev)
    }

    if (!users){
        return (
            <div>Carregando...</div>
        )
    }

    if (visualizar === 1) {
        return (
            <div className="nota-pagina">
                <div className="nota-coluna">
                    <CaixaDeTexto 
                        tipoCaixa="text" 
                        nomeCaixa="search" 
                        idCaixa="search"
                        aoMudar={(ev) => setSearch(ev.target.value)}
                    />
                

                    <h1>Todas as Notas</h1>
                    <Botao
                        msgBotao="+"
                        aoClicar={() => setNovaNota(1)}
                        nomeClasse=""
                    />
                </div>

                <div className="nota-coluna">
                    <p>{notas}</p>
                    <CaixaDeTexto
                        tipoCaixa="text" 
                        nomeCaixa="categoria" 
                        idCaixa="categoria"
                        aoMudar={onChange}
                    />
                    <CaixaDeTexto
                        tipoCaixa="text" 
                        nomeCaixa="text" 
                        idCaixa="text"
                        aoMudar={onChange}
                    />
                    <Botao
                        msgBotao="Salvar"
                        aoClicar={salvar}
                        nomeClasse="login-botao"
                    />
                </div>
            </div>
        )
    }

    if (novaNota === 1) {
        return (
            <div className="nota-pagina">
                <div className="nota-coluna">
                    <CaixaDeTexto 
                        tipoCaixa="text" 
                        nomeCaixa="search" 
                        idCaixa="search"
                        aoMudar={(ev) => setSearch(ev.target.value)}
                    />
                

                    <h1>Todas as Notas</h1>
                    <Botao
                        msgBotao="-"
                        aoClicar={() => setNovaNota(0)}
                        nomeClasse=""
                    />
                </div>

                <div className="nota-coluna">
                    <CaixaDeTexto
                        tipoCaixa="text" 
                        nomeCaixa="title" 
                        idCaixa="title"
                        aoMudar={onChange}
                    />
                    <CaixaDeTexto
                        tipoCaixa="text" 
                        nomeCaixa="categoria" 
                        idCaixa="categoria"
                        aoMudar={onChange}
                    />
                    <CaixaDeTexto
                        tipoCaixa="text" 
                        nomeCaixa="text" 
                        idCaixa="text"
                        aoMudar={onChange}
                    />
                    <Botao
                        msgBotao="Salvar"
                        aoClicar={salvar}
                        nomeClasse="login-botao"
                    />
                </div>
            </div>
        )
    }

    if (!notas) {
        return (
            <div className="nota-pagina">
                <div className="nota-coluna">
                    <CaixaDeTexto 
                        tipoCaixa="text" 
                        nomeCaixa="search" 
                        idCaixa="search"
                        aoMudar={(ev) => setSearch(ev.target.value)}
                    />
                

                    <h1>Todas as Notas</h1>
                    <Botao
                        msgBotao="+"
                        aoClicar={() => setNovaNota(1)}
                        nomeClasse=""
                    />
                </div>

                <div className="nota-coluna">
                    <p>Nenhuma nota</p>
                </div>
            </div>
        );
    }

    return (
        <div className="nota-pagina">
            <div className="nota-coluna">
                <CaixaDeTexto 
                    tipoCaixa="text" 
                    nomeCaixa="search" 
                    idCaixa="search"
                    aoMudar={(ev) => setSearch(ev.target.value)}
                />

                <h1>Todas as Notas</h1>
                <Botao
                    msgBotao="+"
                    aoClicar={() => setNovaNota(1)}
                    nomeClasse=""
                />

                <CardList notas={notas} loading={!notas.length} aoClicar={ver} />
            </div>
            <div className="nota-coluna">
                
            </div>
        </div>
    );
}

export default PageNota;