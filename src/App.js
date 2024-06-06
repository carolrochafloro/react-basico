import './App.css';
import Comment from './components/Comment';

import React, { Component } from 'react';

class App extends Component {
  state = {
    comments: [],
    newComment: {
      name: '',
      message: '',
    },
  };

  addComment = (event) => {
    event.preventDefault();

    const newComment = {
      ...this.state.newComment,
      date: new Date(),
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: { name: '', message: '' },
    });
  };

  removeComment = (comment) => {
    let list = this.state.comments;

    list = list.filter((c) => c !== comment);
    this.setState({ comments: list });
  };

  type = (event) => {
    const { name, value } = event.target;
    this.setState({ newComment: { ...this.state.newComment, [name]: value } });
  };

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            date={comment.date}
            onRemove={this.removeComment.bind(this, comment)}
          >
            {comment.message}
          </Comment>
        ))}

        <form method="post" onSubmit={this.addComment}>
          <p>Comment</p>
          <div>
            <input
              type="text"
              name="name"
              value={this.state.newComment.name}
              onChange={this.type}
              required
              placeholder="Your name"
            ></input>
          </div>
          <div>
            <textarea
              type="text"
              value={this.state.newComment.message}
              onChange={this.type}
              name="message"
              required
              rows="4"
              placeholder="Your comment"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default App;
