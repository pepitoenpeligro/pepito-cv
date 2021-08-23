
import React from 'react';

import TypeWriterEffect from 'react-typewriter-effect';
// import './Header.css';

class Header extends React.Component {


    async componentDidMount() {

    }


    render() {
        if (this.props.data.SPANISH) {
            var listItems = this.props.data.SPANISH.networks.map((d) => <li key={d.name}><a href={d.url}><i className={d.className}></i></a></li>);
        }

        return (
            <header id="home">

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav opaque">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#portfolio">Works</a></li>

                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">   
                        {this.props.data.SPANISH && console.log('Data typewrite', this.props.data.SPANISH.general)}

                        {/* {this.props.data.SPANISH && <h1 className="responsive-headline">I'm {this.props.data.SPANISH.general.name}</h1>} */}
                        {this.props.data.SPANISH && <h3><TypeWriterEffect
                            textStyle={{
                                color: 'white',
                                fontWeight: 500,
                                textAlign: 'center'
                            }}
                            startDelay={1000}
                            cursorColor="#0F9095"
                            multiText={[
                                `I'm ${this.props.data.SPANISH.general.name}`,
                                `But you can call me: ${this.props.data.SPANISH.general.shortname}`,
                                `I'm ${this.props.data.SPANISH.general.city} based.`,
                                `I work as a ${this.props.data.SPANISH.general.description}`,
                                'But I am easily adaptable to all kinds of tasks.',
                                `And this is ${this.props.data.SPANISH.general.github}'s CV`,
                            ]}
                            multiTextDelay={1800}
                            typeSpeed={50}
                        /></h3>}


                        {/* {this.props.data.SPANISH && <h3>I'm {this.props.data.SPANISH.general.city} based. {this.props.data.SPANISH.general.description}</h3>} */}

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