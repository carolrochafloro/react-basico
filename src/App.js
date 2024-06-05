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

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comments.map((comment, index) => (
          <Comment key={index} name={comment.name}>
            {comment.message}
          </Comment>
        ))}
      </div>
    );
  }
}

export default App;
