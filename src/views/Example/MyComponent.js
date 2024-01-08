import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Huan',
        age: '21'
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
  render() {
    return (
        <React.Fragment>
            <div className="first">
                <input value={this.state.name} type="text" onChange={(event) => this.handleChangeName(event)}></input>
                My name is {this.state.name}
            </div>
            <div className="first">
            My age is {this.state['age']}
            </div>
        </React.Fragment>
    )
  }
}

export default MyComponent;
