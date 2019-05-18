import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let p = 'Brown Sugur';
  let h1 = 'Welcome to my new react app';
  let p1 = 'This is my first react apps.I am a front-end web developer.';

  return (
    <div className="App">
      <h1> { h1 } </h1>
      <p> { p1 } </p>

      <div className= 'myDiv'>
        <p>{ p ? p : 'no value'}</p>
      </div>
    </div>

  );
}

export default App;
