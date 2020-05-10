import React from 'react';
import '../styles/List.scss';
import ListButtons from './ListButtons';
import ListInput from './ListInput';

function ListHeader(props) {
  // console.log(props);

  return (
    <form className="app-list-form align-middle p-1 position-relative">
      <ListInput  title={props.title} idList = {props.idList} handleListInput={props.handleListInput}/>
      <ListButtons idList = {props.idList} handleListDelete = {props.handleListDelete} handleListRight = {props.handleListRight} handleListLeft = {props.handleListLeft} />
    </form>
  );
}

export default ListHeader;
