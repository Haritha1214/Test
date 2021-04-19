import React from 'react';
import {connect} from 'react-redux';
import {increment,decrement,reset} from '../actions';

class IncDecBut extends React.Component{
    render(){
      console.log(this.props.count,'count');
      return(
          <div  style={{backgroundColor:'grey'}}>
            <p>Count: {this.props.count} </p>
            <button style={{backgroundColor:'aquamarine'}} onClick={this.props.increment}>Increment</button> 
            <button style={{backgroundColor:'aquamarine'}} onClick={this.props.decrement}>Decrement</button> 
            <button style={{backgroundColor:'aquamarine'}} onClick={this.props.reset}>Reset</button>
          </div>
      ) ; 
    }
}
const mapStateToProps=(state)=>{
   return {count: state.count};
}

export default connect(mapStateToProps,{increment,decrement,reset})(IncDecBut);
