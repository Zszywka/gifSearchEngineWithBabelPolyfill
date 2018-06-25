Search = React.createClass({

  getInitialState() {
    return {
      searchingText: ''
    };
  },

  handleChange: function(event) {
<<<<<<< HEAD
    var searchingText1 = event.target.value;
=======
    var searchingText = event.target.value;
>>>>>>> 4857a966cc90349ba07c467fc57d95738aa085fe
    this.setState({
      searchingText: searchingText
    });
    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  },

  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
<<<<<<< HEAD
=======
    }
>>>>>>> 4857a966cc90349ba07c467fc57d95738aa085fe
  },

  render: function() {

    var styles = {
      fontSize: '1.5em',
      width: '90%',
      maxWidth: '350px'
    };

    return < input
      type = 'text'
      onChange = {this.handleChange}
      onKeyUp = {this.handleKeyUp}
      placeholder = 'Enter the search phrase here'
      style = {styles}
      value = {this.state.searchingText}
    />
  }
});
