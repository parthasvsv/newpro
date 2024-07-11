import React from "react";

class CounterClass extends React.Component{
 constructor(props){
    super(props)
    this.state={count:0}
 }

   increment=()=>{
    this.setState({count:this.state.count+1})
 }
 decrement =()=>{
    this.setState({count:this.state.count-1})
 }
 render(){
    return(<>
    {this.state.count}
    <button onClick={this.increment}>+</button>
    <button onClick={this.decrement}>-</button>
    </>)
 }
}
export default CounterClass