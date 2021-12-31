import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
     

    constructor(props){
        super(props);

        this.state = {
           users: [
                {id : 1 , useername : 'andrew'},
                {id : 2 , useername : 'mark'},
                {id : 3 , useername : 'ben'}
            ]
        }
    }

    render(){
        return(
              
            <div>
            <h1>hello</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                        </tr>
                    </thead>

                    {/* <tbody>
                        <tr>{this.state.users.map()}</tr>
                    </tbody> */}
                </table>
            </div>
        )
    }

}


ReactDOM.render(<App />, document.getElementById ("root"));