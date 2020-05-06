import React, { useEffect, useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import data from '../services/board.json'

function App() {
const list = data.board.list
// console.log(list);
const title = list.map(item => item.title)

const [lists, setLists] = useState(list);
const [titleList, setTitleList] = useState(title);
console.log(titleList);


  return (
    <div className="App">
      <Header/>
      <Board lists = {lists} titleList = {titleList}/>
    </div>
  );
}

export default App;
