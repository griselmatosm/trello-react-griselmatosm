import React from 'react';
import '../styles/List.scss';
import ListButtons from './ListButtons';
import ListInput from './ListInput';

function ListHeader(props) {
  return (
    <form className="app-list-form align-middle p-1 position-relative">
      <ListInput  title={props.title}/>
      <ListButtons />
    </form>
  );
}

export default ListHeader;
