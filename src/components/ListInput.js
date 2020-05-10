import React from 'react';
import '../styles/List.scss';

function ListInput(props) {
  console.log(props.idList);
  
  
  const handleInput = (ev) => {
  const data = {
      inputValue: ev.target.value,
      idList: ev.target.id
    }
    console.log(data);
    props.handleListInput(data)
  }
  return (
  <input
  id= {props.idList} 
  className="app-list-input form-control form-control-sm" 
  placeholder="Tareas importantes" 
  type="text" 
  value={props.title} 
  title="Editar el título de la lista" 
  onChange = {handleInput} />
  )
}

export default ListInput;
