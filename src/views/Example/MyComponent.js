import React from "react";

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }
    handleChangeFirstName = (event) =>{
        this.setState({
            firstName : event.target.value
        })
    }
    handleChangeLastName = (event) =>{
        this.setState({
            lastName : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(">>> Check data input : ", this.state);
    }
  render() {
    console.log('>>> Call render: ', this.state);
    return (
        <div>
            <form>
                <label for="fname">First name:</label>
                <input type="text" value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                /><br/><br/>
                <label for="lname">Last name:</label>
                <input type="text" value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                /><br/><br/>
                <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
        </div>
    )
  }
}

export default MyComponent;
// git branch video9
// git branch -l
// git checkout video9