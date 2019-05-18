import React, { Component } from 'react';
import './App.css';
import First from './first/first'

class App extends Component {
  render(){
    return (
      <div className="App">
        <First name= 'Md Masud' email='masud@gmail.com'/>
        <First name= 'khan' email='masud@gmail.com'/>
        <First name= 'jahed' email='masud@gmail.com'/>
        <First name= 'john' email='masud@gmail.com'/>
        <First name= 'judy' email='masud@gmail.com'/>
        <First name= 'pretter' email='masud@gmail.com'/>
      </div>
    );

  }
  
}

export default App;
