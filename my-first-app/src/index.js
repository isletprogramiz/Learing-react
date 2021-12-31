import React from 'react';
import ReactDOM from 'react-dom';

// there are components in react , those are class and function. they are also kinda function returning html element
//in react js component first letter is capital 
//render method is compulsory in class

class Box extends React.Component {

  render(){
     return <h2>first component</h2>
  }
}
class Smallbox extends React.Component {

  render(){

    const element = 
    <div>
    <Box />
    <h2>box is working {30+40} {console.log("vehicle")}</h2>
  </div>
    return  element
  }
}



class Car extends React.Component {
   
  constructor() {
    super();
    this.state = {
      isold : false,
      expensive : false
    }
  }

  render(){

    return(
      <div> <h1> this car is not costly!!!!!!!!!!!!!</h1></div>
    )
  }
}



ReactDOM.render(<Car /> , document.getElementById('root'))

 