import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Gif extends Component {
  static propTypes = {
    title: propTypes.string,
    embed_url: propTypes.string
  }

  render () {
    const { title, embed_url } = this.props

    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img 
             src={embed_url} 
             alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}