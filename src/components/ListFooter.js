import React from 'react';
import '../styles/List.scss';

function ListFooter(props) {
  // console.log(props.idList);

  const handleNewCard = (ev) => {
    props.handleNewCard(ev.currentTarget.id);
  };

  return (
    <button id={props.idList} type="button" className="ml-1 btn btn-primary btn-sm text-white-50" title="Añadir una nueva tarjeta" onClick={handleNewCard}>
      <span className="fas fa-plus"></span>
      Añadir otra tarjeta
    </button>
  );
}

export default ListFooter;
