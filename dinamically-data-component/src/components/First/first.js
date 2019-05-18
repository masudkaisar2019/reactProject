import React ,{Component} from 'react';
import first from './first.css'

class First extends Component {
    render(){
        return (
            <div>
                <div className='people'>
                <h1>ID: { this.props.id}</h1>
                <h1>Name: { this.props.name}</h1>
                <h2>UnserName: {this.props.username}</h2>
                <h2>Email: { this.props.email}</h2>
                <h2>PhoneNumber: { this.props.phone}</h2>
               
                </div>
                

            </div>
        )
    }

}
export default First;