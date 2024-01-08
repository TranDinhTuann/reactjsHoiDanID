import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
    state = {
        firstName: 'Tuan',
        lastName: '',
        arrJob: [
            {id: 'job1', title: 'Developer', salary: '1000 $'},
            {id: 'job2', title: 'Tester', salary: '500 $'},
            {id: 'job3', title: 'Manager', salary: '2000 $'}
        ]
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
            <ChildComponent 
                name={this.state.firstName} 
                age={'21'}
                address={'Ha Noi'}
                arrJob = {this.state.arrJob}
            />
            {/* chỉ có thể truyền từ cha xuống con, thằng này là cha */}
        </React.Fragment>
    )
  }
}

export default MyComponent;