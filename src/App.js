import React from 'react';
import * as $ from 'jquery';
import html2canvas from 'html2canvas';
import { withStyles } from '@mui/styles';
import { jsPDF } from "jspdf";
import { PDFViewer } from '@react-pdf/renderer';
import { Viewer, Worker } from '@react-pdf-viewer/core';

import Header from './components/Header/Header';
import About from './components/About/About';
import Education from './components/Education/Education';
import Portfolio from './components/Portfolio/Portfolio';
import { CircularProgress, Modal } from '@mui/material';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pepitoResumeData: {},
      loading: false,
      open: false,
      isShowingPDF: false
    }
  };

  useStyles = withStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  componentDidMount() {
    console.info('loading data');
    this.loadData('mockups/cv_data.json');
  }

  showPDF = () => {
    this.setState({ isShowingPDF: !this.state.isShowingPDF });
  }


  loadData(pathData) {
    $.ajax({
      url: pathData,
      dataType: 'json',
      success: function (data) {
        this.setState({ pepitoResumeData: data });
      }.bind(this),
      error: (xhr, status, error) => {
        console.error(error);
      }
    });
  }

  generatePDF = () => {
    this.setState({ loading: true, open: true });
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
        this.setState({ loading: false, open: false });

      });
  }
  handleClose = () => {
    this.setState({ open: false });
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


            <button onClick={this.showPDF} className="centering">
              Show inline CV pdf
            </button>

            <br />
            <br />
            <br />

            {/* <a href={'assets/CV.pdf'} download="cv_jose.pdf"> */}
            <a href={`${process.env.PUBLIC_URL}/assets/CV.pdf`} download="cv_joseac.pdf">
              <button className="centering">Download CV PDF

              </button>
            </a>
            <br />
            <br />
            <br />

            <button onClick={this.generatePDF} className="centering">
              Download Screenshot CV
            </button>

            <br />
            <br />
            <br />

            <Modal
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <div className="modal-custom" >
                <h2 id="simple-modal-title">PDF is generating, please wait :)</h2>
                <div className="circularProgress">

                  {this.state.loading && <CircularProgress />}
                </div>


              </div>

            </Modal>

          </div>
        </div>
        {this.state.isShowingPDF && <div className="row">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
            <Viewer fileUrl={`${process.env.PUBLIC_URL}/assets/CV.pdf`} />
          </Worker>



        </div>
        }

        {this.state.isShowingPDF && <div className="row">
          <PDFViewer className="centering" style={{ width: '800px', height: '1000px' }}>

          </PDFViewer>

        </div>
        }

      </div>


    );
  }

}

export default App;
