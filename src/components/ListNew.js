import React from 'react';
import '../styles/App.scss';

function ListNew() {
  return (
<div>
    <button
      type="button"
      className="btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm"
      title="Añadir una nueva lista"
    >
      <span className="fas fa-plus"></span>
    </button>
  </div>
  );
}

export default ListNew;