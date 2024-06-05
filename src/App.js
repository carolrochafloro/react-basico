import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comment name="Carol">Mensagem.</Comment>
    </div>
  );
}

export default App;
