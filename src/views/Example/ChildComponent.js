import React from "react";
import MyComponent from "./MyComponent";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    console.log('>>> handleOnClickDelete', job);
    this.props.deleteAJob(job);
  }

  render() {
    let { arrJob } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
    console.log('>>> check conditional: ', check);
    return (
      <React.Fragment>
        {/* thỏa mãn điều kiện thì hiển thị sau sấu && */}
        {showJobs === false ?
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        :
          <>
            <div className="job-lists">
              {arrJob.map((item, index) => {
                if (item.salary > 100) {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary} <></> 
                      <span><button style={{cursor: 'pointer'}} onClick={() => this.handleOnClickDelete(item)}>x</button></span>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        }
      </React.Fragment>
    );
  }
}

export default ChildComponent;
