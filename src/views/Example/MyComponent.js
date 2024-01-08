import React from "react";
import ChildComponent from "./ChildComponent";
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
        <React.Fragment>
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
            <ChildComponent name={'TuanTran'} age={'21'}></ChildComponent>
            {/* chỉ có thể truyền từ cha xuống con, thằng này là cha */}
        </React.Fragment>
    )
  }
}

export default MyComponent;