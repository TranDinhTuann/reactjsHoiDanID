import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {
    state = {
        arrJob: [
            {id: 'job1', title: 'Developer', salary: '1000'},
            {id: 'job2', title: 'Tester', salary: '500'},
            {id: 'job3', title: 'Manager', salary: '2000'}
        ]
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job);
        this.setState ({
            arrJob : [...this.state.arrJob, job ]
        })
    }
    deleteAJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter(item => item.id !== job.id);
        this.setState({
            arrJob: currentJob
        })
    }

  render() {
    // console.log('>>> Call render: ', this.state);
    return (
        <React.Fragment>
            <AddComponent
                addNewJob = {this.addNewJob}
            />
            <ChildComponent
                arrJob = {this.state.arrJob}
                deleteAJob = {this.deleteAJob}
            />
            {/* chỉ có thể truyền từ cha xuống con, thằng này là cha */}
        </React.Fragment>
    )
  }
}

export default MyComponent;