import React from 'react';

var SearchBar = React.createClass({
    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
            </form>
        );
    }
});

var SearchArea = React.createClass({
  render(){
    return(
      <div>
          <h1>foo</h1>
          <SearchBar />
          <SearchResult results={this.props.results} />
      </div>
    );
  }
});

var SearchResult = React.createClass({
    render(){
      var rows = this.props.results.map( item =>
        <p>{item["3"].map(i=>i["2"]).join(" ")}</p>
      )
      return(
        <div>
        {rows}
        </div>
      )
    }
});

var SEARCHRESULTS = {
  "1":{"1":"hello*","2":30,"3":-1,"4":2,"5":3,"8":0.5,"9":0.8},
  "2":["hello","*"],
  "3":{"1":[{"1":0,"2":"hello"},{"1":2,"2":"*"}]},
  "4":[
    {"1":2199105074956,"2":9669441,"3":[{"1":0,"2":"hello"},{"1":2,"2":"!"}]},
    {"1":2199064976175,"2":5470898,"3":[{"1":0,"2":"hello"},{"1":2,"2":","}]},
    {"1":2199089736088,"2":1466617,"3":[{"1":0,"2":"hello"},{"1":2,"2":"kitty"}]},
    {"1":3298757440116,"2":1057751,"3":[{"1":0,"2":"hello"},{"1":2,"2":","},{"1":2,"2":"i"}]},
    {"1":2199126908379,"2":1003714,"3":[{"1":0,"2":"hello"},{"1":2,"2":"."}]},
    {"1":2199171691653,"2":815716,"3":[{"1":0,"2":"hello"},{"1":2,"2":"all"}]},
    {"1":2199075941158,"2":764687,"3":[{"1":0,"2":"hello"},{"1":2,"2":"to"}]},
    {"1":2199093741954,"2":686350,"3":[{"1":0,"2":"hello"},{"1":2,"2":"world"}]},
    {"1":2199154519727,"2":603413,"3":[{"1":0,"2":"hello"},{"1":2,"2":"everyone"}]},
    {"1":3298835810759,"2":548418,"3":[{"1":0,"2":"hello"},{"1":2,"2":","},{"1":2,"2":"my"}]},
    {"1":2199120980153,"2":508948,"3":[{"1":0,"2":"hello"},{"1":2,"2":"and"}]},
    {"1":2199103021780,"2":395995,"3":[{"1":0,"2":"hello"},{"1":2,"2":"?"}]},
    {"1":3298947228323,"2":394160,"3":[{"1":0,"2":"hello"},{"1":2,"2":"all"},{"1":2,"2":","}]},
    {"1":2199104931511,"2":386694,"3":[{"1":0,"2":"hello"},{"1":2,"2":"from"}]},
    {"1":2199114416838,"2":377220,"3":[{"1":0,"2":"hello"},{"1":2,"2":"there"}]},
    {"1":2199181218989,"2":319408,"3":[{"1":0,"2":"hello"},{"1":2,"2":"i"}]},
    {"1":3298665307664,"2":261572,"3":[{"1":0,"2":"hello"},{"1":2,"2":"and"},{"1":2,"2":"welcome"}]},
    {"1":2199123427869,"2":228299,"3":[{"1":0,"2":"hello"},{"1":2,"2":"my"}]},
    {"1":3298545080548,"2":228096,"3":[{"1":0,"2":"hello"},{"1":2,"2":"everyone"},{"1":2,"2":","}]},
    {"1":3298730290088,"2":226013,"3":[{"1":0,"2":"hello"},{"1":2,"2":","},{"1":2,"2":"guest"}]},
    {"1":3298698240886,"2":223898,"3":[{"1":0,"2":"hello"},{"1":2,"2":","},{"1":2,"2":"this"}]},
    {"1":2199125627863,"2":213826,"3":[{"1":0,"2":"hello"},{"1":2,"2":"again"}]},
    {"1":3298608103560,"2":196227,"3":[{"1":0,"2":"hello"},{"1":2,"2":","},{"1":2,"2":"i'm"}]},
    {"1":2199178287733,"2":180797,"3":[{"1":0,"2":"hello"},{"1":2,"2":"everybody"}]},
    {"1":3298752665248,"2":175091,"3":[{"1":0,"2":"hello"},{"1":2,"2":"world"},{"1":2,"2":"!"}]},
    {"1":2199187593787,"2":168026,"3":[{"1":0,"2":"hello"},{"1":2,"2":"hello"}]},
    {"1":3299058566740,"2":153231,"3":[{"1":0,"2":"hello"},{"1":2,"2":","},{"1":2,"2":"world"}]},
    {"1":2199047094987,"2":144257,"3":[{"1":0,"2":"hello"},{"1":2,"2":"guest"}]},
    {"1":3298880880506,"2":140056,"3":[{"1":0,"2":"hello"},{"1":2,"2":"to"},{"1":2,"2":"all"}]},
    {"1":3298816620666,"2":131561,"3":[{"1":0,"2":"hello"},{"1":2,"2":"everyone"},{"1":2,"2":"!"}]}
  ],
  "6":0,
  "7":23404306,
  "8":15716,
  "9":0,
  "10":""};

React.render(
    <SearchArea results={SEARCHRESULTS["4"]} />,
    document.getElementById('container')
);