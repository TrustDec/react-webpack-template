import React, { Component } from 'react';
import Dialog from "./Dialog";
import "./App.styl";
import image from './timg.jpg';
export default class App extends Component {
    render() {
        return (
            <div>
                <span className="cubeic-alert">App ~</span>
                <span>App ~</span>
                <img src={image} width="100"/>
                <Dialog/>
            </div>
        );
    }
}