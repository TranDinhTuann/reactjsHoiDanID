import React from "react";
class ChildComponent extends React.Component {
    
  render() {
    console.log('>>> Call render: ', this.props);
    // let age = this.props.age;
    // let name = this.props.name;
    let {name, age, address, arrJob} = this.props;
    // let a = '';
    return (
        <React.Fragment>
            <div className="job-lists">
              {
                // a = arr...
                arrJob.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary}
                    </div>
                  )
                })
              }
              {/* {console.log('>>>check map array: ', a)} */}
            </div>
            {/* thằng này là con */}
        </React.Fragment>
    )
  }
}

export default ChildComponent;