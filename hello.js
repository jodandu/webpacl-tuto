import React from "react";
console.log('React', React);
export default React.createClass({
 render: function() {
   return (<div>Hello, {this.props.name}!</div>);
 },
});
