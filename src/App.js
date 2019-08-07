import React, { Component } from 'react';
import { Title } from './components/Title';
import { SearchForm } from './components/SearchForm';
import { GifList } from './components/GifList';

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults() {
    return this.state.results.length === 0
    ? <p>This search have not results. No Gif, no fun!</p>
    : <GifList gifs={this.state.results}></GifList>
  }

  render () {
    return (
      <div className="App">
        <Title>Search Gifs</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults}></SearchForm>
        </div>
        <div>
          {
            this.state.usedSearch 
            ? this._renderResults()
            : <small>Let's rock it out!</small>
          }
        </div>
      </div>
    );
  }
}

export default App;
