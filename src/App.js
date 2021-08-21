import React, { Component } from 'react';
import * as $ from 'jquery';

import './App.css';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pepitoResumeData: { } 
    }
  };

  componentDidMount(){
    console.info('loading data');
  }

  render(){
    return (
      <div className="App">
        <p>Componente 1</p>
        <p>Componente 2</p>
      </div>
    );
  }
  
}

export default App;
