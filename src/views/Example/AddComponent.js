import React from 'react';

class AddComponent extends React.Component{
    state = {
        title: '',
        salary: ''
    }
    
    handleChangeTitleJob = (event) =>{
        this.setState({
            title : event.target.value
        })
    }
    handleChangeSalary = (event) =>{
        this.setState({
            salary : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.title || !this.state.salary){
            alert('Missing required params')
            return
        }
        console.log(">>> Check data input : ", this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 11),
            title: this.state.title,
            salary: this.state.salary
        });
        // them thanh cong thi input bang rong 
        this.setState({
            title:'',
            salary:''
        })
    }
    render () {
        return (
            <div>
                <form>
                <label for="fname">Title Job:</label>
                <input type="text" value={this.state.title}
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