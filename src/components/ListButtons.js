import React from 'react';
import '../styles/List.scss';

function ListButtons() {
  return (
    <div className="app-list-options">
      <span className="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>
  
      <div className="app-list-btns btn-group btn-group-sm">
        <button
          type="button"
          className="btn btn-light text-muted border shadow-sm"
          title="Borrar esta tarjeta"
        >
          <span className="fas fa-trash-alt"></span>
        </button>
        <button
          type="button"
          className="btn btn-light text-muted border shadow-sm app-list-move-left"
          title="Mover esta lista hacia la izquierda"
        >
          <span className="fas fa-arrow-left"></span>
        </button>
        <button
          type="button"
          className="btn btn-light text-muted border shadow-sm app-list-move-right"
          title="Mover esta lista hacia la derecha"
        >
          <span className="fas fa-arrow-right"></span>
        </button>
      </div>
    </div>
  );
}

export default ListButtons;