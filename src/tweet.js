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
  // handleTweetSubmit: function (author, text) {
  //   var tweet = { author: author, text: text };
  //
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, function (data) {
  //       // Set state in step 10 of the exercise!
  //     }.bind(this)
  //   );
  // },
  componentDidMount: function () {
    this.state.data = this.loadTweetsFromServer();
  },
  getInitialState: function(){
    return { data: []}
  },
  render: function () {
    console.log(this.state.data);
    return (<div className="twitter">
        <h1>Tweets</h1>
        <TweetForm />
        <TweetList data={this.state.data}/>
      </div>
    );
  }
});

var TweetForm = React.createClass({
  render: function () {
    return (
      <form className="tweetForm">
        <p>The Tweet Form</p>
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
