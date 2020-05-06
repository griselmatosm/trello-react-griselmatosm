import React from 'react';
import '../styles/List.scss';

function CardButtons() {
  return (
    <div className="app-card-btns btn-group-vertical btn-group-sm">
    <button
      type="button"
      className="btn btn-light text-muted border shadow-sm app-card-move-up"
      title="Mover esta tarjeta hacia abajo"
    >
      <span className="fas fa-arrow-up"></span>
    </button>
    <button
      type="button"
      className="btn btn-light text-muted border shadow-sm app-card-move-down"
      title="Mover esta tarjeta hacia arriba"
    >
      <span className="fas fa-arrow-down"></span>
    </button>
  </div>
  );
}

export default CardButtons;