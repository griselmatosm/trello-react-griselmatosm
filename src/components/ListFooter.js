import React from 'react';
import '../styles/List.scss';


function ListFooter() {
  return (
<button
  type="button"
  className="ml-1 btn btn-primary btn-sm text-white-50"
  title="Añadir una nueva tarjeta"
>
  <span className="fas fa-plus"></span>
  Añadir otra tarjeta
</button>
  );
}

export default ListFooter;