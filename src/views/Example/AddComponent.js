import React from 'react';

class AddComponent extends React.Component{
    state = {
        titleJob: '',
        salary: ''
    }
    
    handleChangeTitleJob = (event) =>{
        this.setState({
            titleJob : event.target.value
        })
    }
    handleChangeSalary = (event) =>{
        this.setState({
            salary : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(">>> Check data input : ", this.state);
    }
    render () {
        return (
            <div>
                <form>
                <label for="fname">Title Job:</label>
                <input type="text" value={this.state.titleJob}
                    onChange={(event) => this.handleChangeTitleJob(event)}
                /><br/><br/>
                <label for="lname">Salary:</label>
                <input type="text" value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                /><br/><br/>
                <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>
            </div>
        )
    };
};

export default AddComponent;