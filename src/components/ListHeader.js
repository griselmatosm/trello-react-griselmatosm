import React from 'react';
import '../styles/List.scss';
import ListButtons from './ListButtons';
import ListInput from './ListInput';

function ListHeader(props) {
  console.log(props.idList);
  
  return (
    <form className="app-list-form align-middle p-1 position-relative">
      <ListInput  title={props.title}/>
      <ListButtons idList = {props.idList} handleListDelete = {props.handleListDelete} handleListRight = {props.handleListRight} handleListLeft = {props.handleListLeft} />
    </form>
  );
}

export default ListHeader;
