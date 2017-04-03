import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

class App extends React.Component {
  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div class>
        <SearchBar onTermChange={this.handleTermChange} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
