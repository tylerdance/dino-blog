import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const post = {
  title: "Dino Lab",
  author: "Bopasaurus",
  body: "React Day 1",
  comments: ["Bootcamp is fun", "Bootcamp is halfway over", "Bootcamp is stress 100"]
};

ReactDOM.render(
  <React.StrictMode>
    <App post={post} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
