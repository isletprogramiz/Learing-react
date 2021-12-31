import React from "react";
import ReactDom from "react-dom";

class Box extends React.Component {
     
    constructor(props){
        super(props);
        this.state = {
            color : "red",
            height : "50px",
            widht : "50px"
        }
        console.log("constructor!")
    }
    render(){
        const styleBox = {
            width: this.state.widht,
            height : this.state.height,
            backgroundColor : this.state.color
        }
        console.log("render")
        return(
             <div style = {styleBox}></div>
        )
    }

    componentDidMount(){
        console.log('componentDidMount');
        this.setState ({
            height : "400px",
            widht : "400px",
            color :"purple"
        })
    }

}

ReactDom.render(<Box />,document.getElementById('root'))