import React, { Component } from 'react';
import * as $ from 'jquery';

// import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pepitoResumeData: { } 
    }
  };

  componentDidMount(){
    console.info('loading data');
    this.loadData('mockups/cv_data.json');
  }


  loadData(pathData){
    $.ajax({
      url: pathData,
      dataType: 'json',
      success: function(data){
        console.log('loaded data', data);
        this.setState({pepitoResumeData: data});
      }.bind(this),
      error: (xhr, status, error) => {
        console.error(error);
      }
    });
  }


  render(){
    return (
      <div className="App">
        
        <Header data={this.state.pepitoResumeData}></Header>
        <About  data={this.state.pepitoResumeData}></About>
      </div>
    );
  }
  
}

export default App;
