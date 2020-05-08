import React, { useEffect, useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import data from '../services/board.json'

function App() {

const list = data.board.list
const [lists, setLists] = useState(list);

// console.log(titleList);


  return (
    <div className="App">
      <Header/>
      <Board lists = {lists} />
    </div>
  );
}

export default App;
