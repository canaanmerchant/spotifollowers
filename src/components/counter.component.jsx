import React, { Component } from 'react';

class Counter extends Component() {
    componentDidMount () {
        fetch('spotify artist api')
        .then(response => response.json())
        .then(artists = > console.log(artists)); 
    }
    const counter = 1
render(){
        return (
            <div>
                <h1>Follower Count: {counter}</h1>  
            </div>
        );
    }
}

export default Counter;