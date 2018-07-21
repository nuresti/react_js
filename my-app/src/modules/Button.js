import React from 'react';

// class Button extends React.Component {
//   render() {
//     return <button>{this.props.children}</button>;
//   }
// }
function Button(props){
  return <button style={{ paddingTop: 10 }}>{props.children}</button>;
}
export default Button;
