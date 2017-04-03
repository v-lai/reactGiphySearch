import React from 'react';
import ReactDOM from 'react-dom';
import GifList from './components/GifList';
import SearchBar from './components/searchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        {
          id: 1,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 2,
          url: 'http://fakeimg.pl/300/'
        },
        {
          id: 3,
          url: 'http://fakeimg.pl/300/'
        }
      ]
    }
  }

  handleTermChange(term) {
    console.log(term);
  }

  render() {
    return (
      <div class>
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
