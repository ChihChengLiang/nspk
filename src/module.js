import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var url = "http://api.netspeak.org/netspeak3/search?query=hello*&topk=30&nmin=2&nmax=3&format=json"

var SearchBar = React.createClass({
    handleChange(){
      this.props.onUserInput(
        this.refs.searchTextInput.value
      )
    },
    render() {
        return (
            <form>
                <input
                  type="text"
                  placeholder="Search..."
                  value={this.props.searchText}
                  ref="searchTextInput"
                  onChange={this.handleChange} />
            </form>
        );
    }
});

class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      searchText: props.searchText,
      searchResults: props.searchResults
    };
  }
  handleUserInput(searchText){
    $.getJSON(url, result =>{
      this.setState({
        searchResults:result[4]
      });
    }.bind(this))
    this.setState({searchText});
    console.log(this.state)
  }
  render(){
    return(
      <div>
          <SearchBar
            searchText={this.state.searchText}
            onUserInput={this.handleUserInput}/>
          <h1>fpp {this.state.searchText}</h1>
          <SearchResult results={this.state.searchResults} />

      </div>
    );
  }
}
SearchArea.defaultProps = {
  searchText: "",
  searchResults: [],
};

var SearchResult = React.createClass({
    render(){
      console.log(this.props.results);
      var rows = this.props.results.map( item =>
        <p>
        <span>{item["2"]/item["1"]*100}%</span>
        {item["3"].map(i=>i["2"]).join(" ")}
        </p>
      )
      return(
        <div>
        {rows}
        </div>
      )
    }
});

ReactDOM.render(
    <SearchArea />,
    document.getElementById('container')
);
