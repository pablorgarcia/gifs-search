import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Gif extends Component {
  static propTypes = {
    title: propTypes.string,
    embed_url: propTypes.string
  }

  _handleCapitalizeFirtsLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render () {
    const { title, embed_url } = this.props
    const titleCap = this._handleCapitalizeFirtsLetter(title)

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img 
             src={embed_url} 
             alt={titleCap} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{titleCap}</p>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}