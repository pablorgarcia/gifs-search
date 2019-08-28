import React, { Component } from 'react';
import { Title } from '../components/Title';
import { SearchForm } from '../components/SearchForm';
import { GifList } from '../components/GifList';

export class Home extends Component {

  state = { usedSearch: false, results: [] }

  _handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults() {
    return this.state.results.length === 0
    ? <p>This search have not Gif, no fun!</p>
    : <GifList gifs={this.state.results}></GifList>
  }  

  render () {
    return (
      <div>
        <div className='header'>
            <Title>Search Gifs</Title>
            <div className='SearchForm-wrapper'>
              <SearchForm onResults={this._handleResults}></SearchForm>
            </div>
            <small>Created with love by <a href='https://pablogarcia.dev/?app-search-gifs' title='Pablo García: Jr. Full-Stack Web developer'>Pablo García</a></small>
        </div>
        <div>
          {
            this.state.usedSearch 
            ? this._renderResults()
            : <small>Let's rock it out!</small>
          }
        </div>
      </div>
    )
  }
}