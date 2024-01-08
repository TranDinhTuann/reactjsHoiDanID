import React from "react";
// class ChildComponent extends React.Component {
//   // ở đây chỉ nhận dữ liệu từ cha nên dùng function component
//   render() {
//     console.log('>>> Call render: ', this.props);
//     // let age = this.props.age;
//     // let name = this.props.name;
//     let {name, age, address, arrJob} = this.props;
//     // let a = '';
//     return (
//         <React.Fragment>
//             <div className="job-lists">
//               Name : {name} - age: {age} - address: {address}
//               {
//                 // a = arr...
//                 arrJob.map((item, index) => {
//                   return (
//                     <div key={item.id}>
//                       {item.title} - {item.salary}
//                     </div>
//                   )
//                 })
//               }
//               {/* {console.log('>>>check map array: ', a)} */}
//             </div>
//             {/* thằng này là con */}
//         </React.Fragment>
//     )
//   }
// }


const ChildComponent = (props) => {
  // ko cần dùng this vì đây là arrow function, chỉ class mới dùng
  // chỉ dùng class hoặc function, chỉ dùng function với Hook vì lúc đó mới có ích
    let {name, age, address, arrJob} = props;
    // let a = '';
    return (
        <React.Fragment>
            <div className="job-lists">
              Name : {name} - age: {age} - address: {address}
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
export default ChildComponent;