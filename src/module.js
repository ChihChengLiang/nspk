import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const TextField = require('material-ui/lib/text-field');
const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');

var base_url = "http://api.netspeak.org/netspeak3/search?topk=30&format=json&query="

var SearchBar = React.createClass({
    handleChange(){
      this.props.onUserInput(
        this.refs.searchTextInput.getValue()
      )
    },
    render() {
        return (
            <form>
                <TextField
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
            <ListItem
              secondaryText={
                <div>
                  <span>{(item[2]/ total *100).toFixed(1)}%</span>
                  <small style={{float: "right"}}>{item[2]}</small>
                </div>
              }
              primaryText={
                item[3].map( i =>{
                  if(i[1]==0){
                    return i[2] + " "
                  } else {
                    return <strong>{i[2]} </strong>
                  }
                })
              } />
          )
        })
      } else{
        rows = <ListItem primaryText="No search result" />
      }
      return(
        <List>
          {rows}
        </List>
      )
    }
});

ReactDOM.render(
    <SearchArea />,
    document.getElementById('container')
);
