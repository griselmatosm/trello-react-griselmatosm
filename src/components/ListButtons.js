import React from 'react';
import '../styles/List.scss';

function ListButtons(props) {
  const handleListDelete = (ev) => {
    console.log(ev.currentTarget.id)
    props.handleListDelete(ev.currentTarget.id)   
  }
  const handleListRight = (ev) => {
    console.log(ev.currentTarget.name);
    props.handleListRight(ev.currentTarget.name)    
  }
  const handleListLeft = (ev) => {
    console.log(ev.currentTarget.name);
    props.handleListLeft(ev.currentTarget.name)    
  }
  return (
    <div className="app-list-options">
      <span className="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>
  
      <div className="app-list-btns btn-group btn-group-sm">
        <button
          id = {props.idList}
          type="button"
          className="btn btn-light text-muted border shadow-sm"
          title="Borrar esta tarjeta"
          onClick = {handleListDelete}
        >
          <span className="fas fa-trash-alt"></span>
        </button>
        <button
          name = {props.idList}
          type="button"
          className="btn btn-light text-muted border shadow-sm app-list-move-left"
          title="Mover esta lista hacia la izquierda"
          onClick = {handleListLeft}
        >
          <span className="fas fa-arrow-left"></span>
        </button>
        <button
          name = {props.idList}
          type="button"
          className="btn btn-light text-muted border shadow-sm app-list-move-right"
          title="Mover esta lista hacia la derecha"
          onClick = {handleListRight}
        >
          <span className="fas fa-arrow-right"></span>
        </button>
      </div>
    </div>
  );
}

export default ListButtons;