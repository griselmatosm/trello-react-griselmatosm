import React from 'react';
import '../styles/List.scss';
import ListHeader from './ListHeader';
import ListCard from './ListCard';
import ListFooter from './ListFooter';

function List(props) {
  // console.log(props.itemList.title); 
  
  const card = props.itemList.cards;
  const cards = card.map(item => <ListCard key = {item.id} cardData = {item} />)
  // const newCard = props.cards;
  // const newCards = newCard.map((item, i) => <ListCard key = {i} cardData = {item} /> )

  return (
    <div className="app-list">
      <div className="p-1 rounded-sm bg-primary shadow">
        <ListHeader idList = {props.itemList.id} title = {props.itemList.title} handleListInput={props.handleListInput} handleListDelete = {props.handleListDelete} handleListRight = {props.handleListRight} handleListLeft = {props.handleListLeft} />
        {cards}
        {/* {newCards} */}
        <ListFooter idList = {props.itemList.id} handleNewCard = {props.handleNewCard} />
      </div>
    </div>
  );
}

export default List;
