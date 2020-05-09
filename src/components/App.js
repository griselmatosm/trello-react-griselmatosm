import React, { useEffect, useState } from 'react';
import '../styles/App.scss';
import Header from './Header';
import Board from './Board';
import data from '../services/board.json';

function App() {
  const list = data.board.list;

  const [lists, setLists] = useState(list);
  const [cards, setCards] = useState([]);

  const handleListNew = () => {
    // debugger;
    console.log('me piden añadir una lista');
    const newList = [...lists];
    newList.push({ title: '', cards: [] });
    setLists(newList);
  };
  lists.map((item, i) => (item.id = i));

  const handleListDelete = (id) => {
    console.log('me piden eliminar esta lista: ', id)
    const delList = [...lists];
    delList.splice(id, 1)
    setLists(delList)   
  }

  const handleListRight = (id) => {
    console.log('me piden mover esta lista a la derecha: ', id);
    const currentList = [...lists];
    const delList = currentList.splice(id, 1)
    console.log(delList, currentList);
    currentList.splice((id + 1), 0, delList[0]);
    setLists(currentList)     
  }

  const handleListLeft = (id) => {
    console.log('me piden mover esta lista a la derecha: ', id);
    const currentList = [...lists];
    const delList = currentList.splice(id, 1)
    console.log(delList, currentList);
    currentList.splice((id - 1), 0, delList[0]);
    setLists(currentList)     
  }

  const handleNewCard = (id) => {
    console.log('me piden añadir una tarjeta de la lista: ', id);

    // const newCard = [...cards];
    // newCard.push({id: "", title: "", description: "", tags: Array(0)});
    // setCards(newCard)

    const returnNewCard = () => {
      // debugger;
      for (const item of lists) {
        console.log(item.cards);
        if (item.id === parseInt(id)) {
          item.cards.push({ id: '', title: '', description: '', tags: Array(0) });
        }
      }
      return setLists(lists)   
    };
    returnNewCard()
  };
  console.log(lists);

  return (
    <div className="App">
      <Header />
      <Board lists={lists} cards={cards} handleListNew={handleListNew} handleNewCard={handleNewCard} handleListDelete = {handleListDelete} handleListRight = {handleListRight} handleListLeft = {handleListLeft} />
    </div>
  );
}

export default App;
