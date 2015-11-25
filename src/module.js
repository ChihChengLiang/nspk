import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

var base_url = "http://api.netspeak.org/netspeak3/search?topk=30&format=json&query="

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
    var url = base_url + encodeURI(searchText);
    $.getJSON(url, result =>{
      this.setState({
        searchResults: result
      });
    }.bind(this))
    this.setState({searchText});
  }
  render(){
    return(
      <div>
          <SearchBar
            searchText={this.state.searchText}
            onUserInput={this.handleUserInput}/>
          <h1>Searching: &quot;{this.state.searchText}&quot;</h1>
          <SearchResult results={this.state.searchResults} />

      </div>
    );
  }
}
SearchArea.defaultProps = {
  searchText: "",
  searchResults: {},
};

var SearchResult = React.createClass({
    render(){
      var rows;
      var total = this.props.results[7];
      if(this.props.results.hasOwnProperty(4)){
        rows = this.props.results[4].map( item =>{
          return(
          <tr>
            <td>{(item[2]/ total *100).toFixed(1)}%</td>
            <td>{item[2]}</td>
            <td>{item[3].map( i =>{
              if(i[1]==0){
                return i[2] + " "
              } else {
                return <strong>{i[2]} </strong>
              }
              })}
            </td>
          </tr>)
        })
      } else{
        rows = <tr><td>No search result</td></tr>
      }
      return(
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      )
    }
});

ReactDOM.render(
    <SearchArea />,
    document.getElementById('container')
);
