import React from 'react';
import Card from './Card';

const CardList = ({ loading, notas, aoClicar }) => {
    if (loading) {
        <div>Carregando...</div>;
    }

    return (
        <div>
            {notas.map((nota) => (
                <Card nota={nota} aoClicar={aoClicar} />
            ))}
        </div>
    );
}

export default CardList;