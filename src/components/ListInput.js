import React from 'react';
import '../styles/List.scss';

function ListInput(props) {
  const title = props.title;
  console.log( title);

  
  
  const handleInput = (ev) => {
  const data = {
      inputValue: ev.target.value
    }
    console.log(data);
    

  }
  return (
  <input 
  className="app-list-input form-control form-control-sm" 
  placeholder="Tareas importantes" 
  type="text" 
  value={props.title} 
  title="Editar el título de la lista" 
  onChange = {handleInput} />
  )
}

export default ListInput;
