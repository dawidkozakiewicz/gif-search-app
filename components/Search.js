class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchingText: ""
    };
  }

  handleChange = event => {
    var searchingText = event.target.value;
    this.setState({
      searchingText: searchingText
    });

    if (searchingText.length > 2) {
      this.props.handleSearch(searchingText);
    }
  };

  handleKeyUp = event => {
    if (event.keyCode === 13) {
      this.props.handleSearch(this.state.searchingText);
    }
  };

  render() {
    return (
      <div className="row">
      <div className="input-field col l6 s12">
        <input value={this.state.searchingText} id="gif" type="text" className="validate col s12" 
         onChange={this.handleChange}
         onKeyUp={this.handleKeyUp}
        />
       <label className="active" htmlFor="gif">Wpisz coś (minimum trzy znaki):</label>
      </div>
    </div>


    );
  }




  





}



