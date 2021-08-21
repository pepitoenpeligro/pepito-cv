
import React, { Component } from 'react';
import './Header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
    };

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <p>Datos</p>
                <p>{JSON.stringify(this.props.data)}</p>
            </div>
        );
    }
}

export default Header;