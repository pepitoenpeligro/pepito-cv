
import React, { Component } from 'react';
// import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);



    };

    async componentDidMount() {

    }


    render() {
        if (this.props.data.SPANISH) {
            console.info('algo', this.props.data.SPANISH.networks);
            var networks = this.props.data.SPANISH.networks.map(function (network) {
                return <li key={network.name}><a href={network.url}></a></li>
            })
            var listItems = this.props.data.SPANISH.networks.map((d) => <li key={d.name}><a href={d.url}><i className={d.className}></i></a></li>);
            console.log(listItems);
        }

        return (
            <header id="home">

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        
                        {this.props.data.SPANISH && <h1 className="responsive-headline">I'm {this.props.data.SPANISH.general.name}</h1>}
                        {this.props.data.SPANISH && <h3>I'm {this.props.data.SPANISH.general.city} based. {this.props.data.SPANISH.general.description}</h3>}
                        
                        <hr />
                        <ul className="social">
                            {listItems}
                            {/* {this.props.data.SPANISH && this.props.data.SPANISH.networks.map(function (network) {
                                return <li key={network.name}><a href={network.url}></a></li>
                            })} */}
                        </ul>


                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Header;