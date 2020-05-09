import React from 'react';
import '../styles/App.scss';
import List from './List';
import ListNew from './ListNew';

function Board(props) {
  console.log(props.lists);
  
  const list = props.lists;
  const lists = list
  .map((item, i) => <List key={i} itemList={item} cards = {props.cards} handleNewCard = {props.handleNewCard} handleListDelete = {props.handleListDelete}/>);

  return (
    <main className="app-board d-flex flex-nowrap">
      {lists}
      <ListNew handleListNew = {props.handleListNew} />
    </main>
  );
}

export default Board;
