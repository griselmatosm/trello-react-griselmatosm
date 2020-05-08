import React from 'react';
import '../styles/List.scss';
import ListHeader from './ListHeader';
import ListCard from './ListCard';
import ListFooter from './ListFooter';

function List(props) {
  console.log(props);

  const card = props.itemList.cards;
  const cards = card.map(item => <ListCard key = {item.id} cardData = {item} />)

  return (
    <div className="app-list">
      <div className="p-1 rounded-sm bg-primary shadow">
        <ListHeader title = {props.itemList.title} />
        {cards}
        <ListFooter />
      </div>
    </div>
  );
}

export default List;
