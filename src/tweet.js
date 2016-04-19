var React = require('react');
var ReactDOM = require('react-dom');

var Twitter = React.createClass({
  loadTweetsFromServer: function () {
    // GET updated set of tweets from database
    $.get(this.props.url, function (data) {
        this.setState({data: data});
      }.bind(this)
    );
  },
  handleTweetSubmit: function (author, text) {
    var tweet = { author: author, text: text };

    // POST to add tweet to database
    $.post(this.props.url, tweet, function (data) {
        this.setState({data: data});
      }.bind(this)
    );
  },
  componentDidMount: function () {
    this.state.data = this.loadTweetsFromServer();
  },
  getInitialState: function(){
    return { data: []}
  },
  render: function () {
    return (<div className="twitter">
        <h1>Tweets</h1>
        <TweetForm onTweetSubmit={this.handleTweetSubmit}/>
        <TweetList data={this.state.data}/>
      </div>
    );
  }
});

var TweetForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault
    var author = this.refs.author.value;
    var text = this.refs.text.value;
    if(!text || !author){
      return;
    }
    this.props.onTweetSubmit(author, text);
    this.refs.author.value = "";
    this.refs.text.value = "";
  },
  render: function () {
    return (
      <form className="tweetForm" onSubmit={this.handleSubmit}>
        <input text="author" name="author" ref="author"/>
        <input text="text" name="text" ref="text"/>
        <button className="btn btn-info">Submit</button>
      </form>
    );
  }
});

var TweetList = React.createClass({
  render: function () {
    var tweets =  this.props.data.map(function(tweet, i){
      return <Tweet author={tweet.author} text={tweet.text}/>;
    });

    return (
      <div className="tweetList">
        <h1>The Tweet List</h1>
        <ul>
          <li>{tweets}</li>
        </ul>
      </div>
    );
  }
});

var Tweet = React.createClass({
  render: function () {
    return (
      <div className="tweet">
        <h4>{this.props.author}</h4>
        <p>{this.props.text}</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Twitter url="tweets.json"/>,
  document.getElementById('tweets')
);
