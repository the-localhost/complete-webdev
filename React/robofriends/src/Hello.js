import React, {Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hey, hello!</h1>
                <p>Read our <a href="#">guide to work</a>, if this is your first day.</p>
            </div>
        )
    }
}

export default Hello;