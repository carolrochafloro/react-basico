import React from 'react';
import './Comment.css';

const Comment = (props) => {
  return (
    <div className="Comment">
      <h2>{props.name}</h2>
      <p>{props.children}</p>
      <div>{props.date.toLocaleString()}</div>
      <button onClick={props.onRemove}>&times;</button>
    </div>
  );
};

export default Comment;
