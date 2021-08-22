import React, { Component } from 'react';
import * as $ from 'jquery';
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

// import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Portfolio from './components/Portfolio/Portfolio';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pepitoResumeData: {}
    }
  };

  componentDidMount() {
    console.info('loading data');
    this.loadData('mockups/cv_data.json');
  }


  loadData(pathData) {
    $.ajax({
      url: pathData,
      dataType: 'json',
      success: function (data) {
        console.log('loaded data', data);
        this.setState({ pepitoResumeData: data });
      }.bind(this),
      error: (xhr, status, error) => {
        console.error(error);
      }
    });
  }

  generatePDF() {
    alert("Generating");
    const input = document.getElementById('root');
    html2canvas(input, { scrollY: -window.scrollY })
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        const imgWidth = 190; // mm of A4
        const pageHeight = 290; // mm of A4
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        const doc = new jsPDF('pt', 'mm');
        let position = 0;
        doc.addImage(imgData, 'PNG', 10, 0, imgWidth, imgHeight + 25);
        heightLeft -= pageHeight;
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight + 25);
          heightLeft -= pageHeight;
        }
        doc.save('cv_pepitoenpeligro.pdf');
      });
  }


  render() {
    return (
      <div className="App">

        <Header data={this.state.pepitoResumeData}></Header>
        <About data={this.state.pepitoResumeData}></About>
        <Education data={this.state.pepitoResumeData}></Education>
        <Portfolio data={this.state.pepitoResumeData}></Portfolio>
        <div className="footer">
          <div className="row">
            <br />
            <br />
            <br />
            <button onClick={this.generatePDF}>
              Generate PDF-CV
            </button>
            <br />
            <br />
            <br />

          </div>
        </div>
      </div>

    );
  }

}

export default App;
