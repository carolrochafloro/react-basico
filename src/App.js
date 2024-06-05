import './App.css';
import Comment from './components/Comment';
import React, { Component } from 'react';

class App extends Component {
  state = {
    comments: [
      {
        name: 'Carol',
        message: 'Teste',
      },
      {
        name: 'Gustavo',
        message: 'Outro teste',
      },
    ],
  };

  addComment = () => {
    const newComment = {
      name: 'Pedro',
      message: 'Adding a comment',
    };

    // without spread operator
    // let list = this.state.comments;
    // list.push(newComment);
    // this.setState({ comments: list });

    // using spread operator
    this.setState({
      comments: [...this.state.comments, newComment],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comments.map((comment, index) => (
          <Comment key={index} name={comment.name}>
            {comment.message}
          </Comment>
        ))}
        <button onClick={this.addComment}>Comment</button>
      </div>
    );
  }
}

export default App;
