import React, {Component} from 'react';
import counter from './counter.css'

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 10,
            color: 'black',
            visibility: 'visible'
        }
    }
    decrease = ()=> {
       this.setState({
           count: this.state.count -1
       })
       if(this.state.count <=5){
           this.setState({
               color: 'red',
               visibility: 'hidden'

           })
       }
       else{
        this.setState({
            color: 'black',
            visibility: 'visible'
        })
           
       }
    }
    increase = ()=> {
        this.setState({
            count: this.state.count + 1
        })
        if(this.state.count >=10){
            this.setState({
                color: 'blue',
                visibility: 'hidden'
            })
        }
        else{
         this.setState({
             color: 'black',
             visibility: 'visible'
         })
            
        }
    }
    render(){
        return (
            <div>
              
                <div className= 'counter'>
                    <h1>I am a counter</h1>
                    <button className="btn" onClick= {this.decrease} style = {{color: this.state.visibility}}> - </button> 
                        <span style = {{color: this.state.color}}>{this.state.count}</span>
                    <button className="btn" onClick= {this.increase}> + </button>
                </div>
            
            </div>
        )
    }

}

export default Counter;