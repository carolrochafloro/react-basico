import React from 'react';
import './Comment.css';

const Comment = (props) => {
  return (
    <div className="Comment">
      <h2 className="name">{props.name}</h2>
      <p className="message">{props.children}</p>
      <div className="date">{props.date.toLocaleString()}</div>
      <button onClick={props.onRemove}>&times;</button>
    </div>
  );
};

export default Comment;
