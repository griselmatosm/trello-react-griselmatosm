import React from 'react';
import '../styles/Card.scss';

function CardTag(props) {
  return (
    <>
      <span className="badge badge-secondary bg-success">{props.tag}</span>
    </>
  );
}

export default CardTag;
