import React from 'react';
import './Card.css';

export default function Card(props) {
  return <div className="transaction_card">{props.children}</div>;
}
