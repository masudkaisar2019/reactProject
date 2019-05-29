import React, {Component} from 'react'

class Event extends Component {
    state= {
        name: ''
    }

    clickHandaler = (event)=>{
        console.log(event.target);
        
    }
    inputHandaler = (event)=>{
        this.setState({
            name: event.target.value
        })
    }
    render(){
        return(
            <div className='container my-3'>
                <input onChange= {this.inputHandaler} value= {this.state.name} type= 'text' placeholder='Enter your name'/>
                <button className='btn btn-primary' onClick= {this.clickHandaler}> Click Me </button>
                {this.state.name ? <p>Hello {this.state.name}</p> : ' '}
            </div>
        )
    }
}
export default Event;
