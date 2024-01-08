import React from "react";
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };
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
                if (item.salary > 600) {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}
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
