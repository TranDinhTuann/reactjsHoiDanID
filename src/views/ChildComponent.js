import React from "react";
class ChildComponent extends React.Component {
    
  render() {
    console.log('>>> Call render: ', this.props);
    // let age = this.props.age;
    // let name = this.props.name;
    let {name, age} = this.props;
    return (
        <React.Fragment>
            <div>ChildComponent : {name} - age: {age}</div>
            {/* thằng này là con */}
        </React.Fragment>
    )
  }
}

export default ChildComponent;