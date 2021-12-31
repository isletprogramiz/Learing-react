import React from 'react'
import ReactDom from 'react-dom'

class Bike extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            color : "red"             
        }  

    }

    changecolor(color){
        this.setState({color: "purple"})
    }

    render(){
        return (
            <div>
            <Cycle />
            <h1> Hey! {this.state.color}</h1>
            <h3>from cycle components {this.props.model} {this.props.engine}</h3>
            </div>
        );
    }

}

class Cycle extends React.Component {
//inside render we write jsx. it is an extension js
    render()
    {
        return (
         <div> 
         <h1>hello</h1>
        <h2>hello there</h2>
        </div>  )
    }

}


ReactDom.render(<Bike model ="2019" engine ="4-stroke"/>,document.getElementById('root'))