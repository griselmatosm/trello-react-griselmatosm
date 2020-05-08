import React from 'react';
import '../styles/App.scss';
import List from './List';
import ListNew from './ListNew';

function Board(props) {
  // console.log(props.titleList);
  
  const list = props.lists;
  const lists = list
  .map((item, i) => <List key={i} itemList={item}/>);

  return (
    <main className="app-board d-flex flex-nowrap">
      {lists}
      <ListNew />
    </main>
  );
}

export default Board;
