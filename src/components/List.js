import React from 'react';
import '../styles/List.scss';
import ListHeader from './ListHeader';
import ListCard from './ListCard';
import ListFooter from './ListFooter';

function List(props) {
  console.log(props.itemList.cards);
  

  const card = props.itemList.cards;
  const cards = card.map(item => <ListCard key = {item.id} cardData = {item} />)
  // const newCard = props.cards;
  // const newCards = newCard.map((item, i) => <ListCard key = {i} cardData = {item} /> )

  return (
    <div className="app-list">
      <div className="p-1 rounded-sm bg-primary shadow">
        <ListHeader idList = {props.itemList.id} title = {props.itemList.title} handleListDelete = {props.handleListDelete} />
        {cards}
        {/* {newCards} */}
        <ListFooter idList = {props.itemList.id} handleNewCard = {props.handleNewCard} />
      </div>
    </div>
  );
}

export default List;
