var React = require('react');
var ReactDOM = require('react-dom');

var data = [
  {
      "author": "Michael Scott",
      "text": "Would I rather be feared or loved? Easy, both. I want people to be afraid of how much they love me."
  },
  {
      "author": "Jeff Bezos",
      "text": "In the end, we are our choices."
  }
];

var Twitter = React.createClass({
  // loadTweetsFromServer: function () {
  //   // GET updated set of tweets from database
  //   $.get(this.props.url, function (data) {
  //       // Set state in step 6 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // handleTweetSubmit: function (author, text) {
  //   var tweet = { author: author, text: text };
  //
  //   // POST to add tweet to database
  //   $.post(this.props.url, tweet, function (data) {
  //       // Set state in step 10 of the exercise!
  //     }.bind(this)
  //   );
  // },
  // componentDidMount: function () {
  //   // Set this.state.data to most recent set of tweets from database
  //   this.loadTweetsFromServer();
  // },
  render: function () {
    return (<div className="twitter">
        <h1>Tweets</h1>
        <TweetForm />
        <TweetList data={this.props.data}/>
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
    return (
      <div className="tweetList">
        <h1>The Tweet List</h1>
        <Tweet author={this.props.data[0].author} text={this.props.data[0].text}/>
        <Tweet author={this.props.data[1].author} text={this.props.data[1].text}/>
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
  <Twitter data={data}/>,
  document.getElementById('tweets')
);
