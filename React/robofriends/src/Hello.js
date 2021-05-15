import React, {Component} from 'react';
import './Hello.css';

/*
class Hello extends Component {
    render() {
        // here we use classNames in div attributes as this is JSX and not HTML
        // 'class' is already a keyword in JS, so it will give warning but will work
        return (
            <div className="f1 tc">
                <h1>Hey, hello!</h1>
                <p>Read our <a href="#">guide to work</a>, if this is your first day.</p>
                <p>This is what we got:</p><br/>
                <p>{this.props.greeting}</p>
            </div>
        )
    }
}
*/
const Hello = (props) => {
    return (
        <div className="f1 tc">
            <h1>Hey, hello!</h1>
            <p>Read our <a href="#">guide to work</a>, if this is your first day.</p>
            <p>This is what we got:</p><br/>
            <p>{props.greeting}</p>
        </div>
    )
}
export default Hello;