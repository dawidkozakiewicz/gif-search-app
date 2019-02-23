Search = React.createClass({

  getInitialState() {
    return {
      searchingText: ''
    };
  },

  handleChange: function(event) {
    var searchingText = event.target.value;
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
    }
  },

  render: function() {

    var styles = {
      fontSize: '1.0em',
      width: '90%',
      maxWidth: '300px',
      backgroundColor: 'blueviolet',
      border: '.5px solid black',
      outline: 'none',
      margin: '20px',
      color: 'white',
      padding: '15px'
    };

    return (
      <input
        type="text"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Wpisz coś"
        style={styles}
        value={this.state.searchingText}
      />
    );
  }
});
