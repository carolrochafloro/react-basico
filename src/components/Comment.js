import React from 'react';
import './Comment.css';

const Comment = (props) => {
  const date = new Date();
  return (
    <div className="Comment">
      <h2>{props.name}</h2>
      <p>{props.children}</p>
      <div>{date.toLocaleString()}</div>
    </div>
  );
};

export default Comment;
