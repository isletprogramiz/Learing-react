import React from 'react';
import ReactDOM from 'react-dom';

class EventDemo extends React.Component {
  
  //regular function with this
  // clickHandler(){
  //   console.log(this)
  // }

  clickHandler = (msg1,msg2) => {
    console.log(msg1,msg2)
  }


  render(){
    return (
      <div>
        {/* <button type ="button" 
        onClick={this.clickHandler.bind(this)}
        >Click</button> */}

        <button type = "button" 
        onClick={() => this.clickHandler("hello","welcome")}>
        Click</button>
      </div>
    )
  }
}


class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstname : '',
      lastname : ''
    }
  }

  changeHandler(event){
    console.log(event.target.name);
    console.log(event.target.value);
  }

   
  render(){
    return(
      <form>
      <p>FirstName :</p>
      <input type = "text" 
       name = "firstname"
       onChange={this.changeHandler.bind(this)}
      />

      <p>LastName :</p>
      <input type = "text"
      name = "lastname"
      onChange={this.changeHandler.bind(this)} /> 
       <p></p>
      <input type = "submit" value= "Send" />


      </form>
    )
  }
}

//ReactDOM.render(<EventDemo />,document.getElementById('root'))

ReactDOM.render(<Form /> ,document.getElementById('root'))