var React = require('react');
var ReactDOM = require('react-dom');
var name = ["Mike","Rory","Dana"];

var Hello = React.createClass({
  render: function(){
    return(<div>{this.props.greeting}, {this.props.name[2]}!</div>);
  }
});

ReactDOM.render(<Hello greeting="Hello" name={name}/>, document.getElementById('hello'));

ReactDOM.render(
  <Hello name={name} greeting="Goodbye"/>,
  document.getElementById('goodbye')
);
