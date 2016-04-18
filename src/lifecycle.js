var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
  getInitialState: function (){
    return {time: 0}
  },
  componentWillMount: function (){
    return true;
  },
  render: function (){
    return <div>{this.state.time} seconds have elapsed</div>
  },
  componentDidMount: function (){
    setInterval(function(){
      this.setState({time: this.state.time + 1});
    }.bind(this), 1000);
  }
});

ReactDOM.render(<Timer/>, document.getElementById("lifecycle"));
