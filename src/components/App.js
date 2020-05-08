import React, { useEffect, useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import data from '../services/board.json'

function App() {

const list = data.board.list
const [lists, setLists] = useState(list);

const handleListNew = () => {
  console.log('me piden añadir una lista');
  const newList = [...lists];
  newList.push({title: "", cards: Array(0)});
  setLists(newList); 
}
console.log(lists);

  return (
    <div className="App">
      <Header/>
      <Board lists = {lists} handleListNew = {handleListNew} />
    </div>
  );
}

export default App;
