import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Gif } from './Gif';

export class GifList extends Component {
  static propTypes = {
    gifs: propTypes.array
  }

  render () {
    const { gifs } = this.props
    return (
      <div className='GifsList'>
        {
          gifs.map(gif => {
            return (
              <div key={gif.id} className='GifsList-item'>
                <Gif 
                id={gif.id}
                title={gif.title}
                image={gif.images.downsized.url}
                />
              </div>
            )
          })
        }
      </div>
    )
  }
}
