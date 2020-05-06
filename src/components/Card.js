import React from 'react';
import '../styles/Card.scss';
import CardButtons from './CardButtons';
import CardTag from './CardTag';

function Card(props) {
  // console.log(props.cardData.tags);
  const tag = props.cardData.tags;
  const tags = tag.map((item, i) => <CardTag key={i} tag={item} />);
  return (
    <article className="js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm" title="Abrir la tarjeta">
      {tags}
      <div>
        <h3 className="h6">{props.cardData.title}</h3>
      </div>

      <div className="text-black-50">
        <small className="pr-2 fas fa-align-left"></small>
        <small className="far fa-check-square"></small>
        <small title="Subtareas completadas: 3 de 5">3/5</small>
      </div>
      <CardButtons />
    </article>
  );
}

export default Card;
