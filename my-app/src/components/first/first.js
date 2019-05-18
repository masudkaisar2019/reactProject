import React, { Component } from 'react';
import first from './first.css'

class First extends Component {
    render(){
        // learning props and creating component
        console.log(this.props);
        return (
            <div>
                <div className='nameDiv'>
                    <h1>My Name is : { this.props.name}</h1>
                    <h1>My Email is : { this.props.email}</h1>
                </div>
              
            </div>
        )
    }
}

export default First;