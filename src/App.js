// import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>{props.post.title}</h1>
      <p>by {props.post.author}</p>
      <h2>{props.post.body}</h2>
      <p>{props.post.comments[0]}</p>
      <p>{props.post.comments[1]}</p>
      <p>{props.post.comments[2]}</p>
    </div>
  );
}

export default App;
