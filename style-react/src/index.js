import React  from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
    }

    increaseCounter(){
        this.setState({counter : this.state.counter + 1});
        document.getElementById('display').style.color ="green";
    }
    decreaseCounter(){
        if(this.state.counter > 0)
        this.setState({counter : this.state.counter - 1});
        document.getElementById('display').style.color ="red";
    }
    resetCounter(){
        this.setState({counter : this.state.counter = 0});
        document.getElementById('display').style.color ="yellow";
    }

    render(){
        return (
            <div className='container'>
                <div id = 'display'>{this.state.counter}</div>
                <button  id = "increse" type = "button" onClick={this.increaseCounter.bind(this)}> + </button>
                <button id = "decrese" type = "button"onClick={this.resetCounter.bind(this)} > Reset </button>
                <button  id ="reset" type = "button" onClick={this.decreaseCounter.bind(this)}> - </button>
                
            </div>
        )

    }
}

ReactDOM.render(<App /> , document.getElementById('root'))