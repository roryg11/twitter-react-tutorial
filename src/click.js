var React = require('react');
var ReactDOM = require('react-dom');

var ClickCounter = React.createClass({
  getInitialState: function(){
    return { clicks: this.props.clickNumber}
  },
  handleBtnClick: function(){
      this.setState({
        clicks: this.state.clicks + 1
      });
  },
  render: function(){
    var isEven = this.state.clicks % 2 === 0;
    return(
      <div>
        <button className="btn btn-primary" onClick={this.handleBtnClick}>
        {this.props.text}: <span className="badge">{this.state.clicks}</span>
        </button>
        <div>{isEven? "EVEN!" : "ODD"}</div>
        <ClickNumber caption="Numero de clics" number={this.state.clicks}/>
        <ClickNumber caption="Number of clicks" number={this.state.clicks}/>
      </div>
    )
  }
});

var ClickNumber = React.createClass({
  render: function(){
    return(
      <div>{this.props.caption} {this.props.number}</div>
    )
  }
});

ReactDOM.render(
  <ClickCounter text="Clicks" clickNumber={1}/>,
  document.getElementById("click-counter")
);
