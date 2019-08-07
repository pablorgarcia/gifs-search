import React, { Component } from 'react';
import { API_GIF_KEY } from '../env'

// Create your Api key access here: https://developers.giphy.com
const API_KEY = API_GIF_KEY

export class SearchForm extends Component {
  state = {
    inputGif: ''
  }

  _handleChange = (e) => {
    this.setState({ inputGif: e.target.value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    const { inputGif } = this.state
    fetch(`http://api.giphy.com/v1/gifs/search?q=${inputGif}&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(results => {
        const { data = [] }= results
        console.log({ data })
        this.props.onResults(data)
      })
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input 
            className="input" 
            onChange={this._handleChange}
            type="text" 
            placeholder="Gif to search" />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}
