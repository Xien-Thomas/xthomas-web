import React from "react";
// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }
function Square(props) {
  return (
    <button classname="squares" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
export default Square;
