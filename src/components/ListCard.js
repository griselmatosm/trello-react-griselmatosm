import React from 'react';
import '../styles/List.scss';
import Card from './Card'

function ListCard(props) {
  
  return (
      <>
      <Card cardData = {props.cardData}/>
      </>

  );
}

export default ListCard;