import React, { Component } from 'react';
import propTypes from 'prop-types';
import { API_GIF_KEY } from '../env';

import { ButtonBackToHome } from '../components/ButtonBackToHome';

// Create your Api key access here: https://developers.giphy.com
const API_KEY = API_GIF_KEY

export class Detail extends Component {
  static propTypes = {
    match: propTypes.shape({
      params: propTypes.object,
      isExact: propTypes.bool,
      path: propTypes.string,
      url: propTypes.string
    })
  }

  state = { gif: {} }

  _fecthGif ({ id }) {
    fetch(`http://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(gif => {
        console.log({ gif })
        this.setState(gif)
      })
  }

  componentDidMount () {
    console.log(this.props)
    const { gifId } = this.props.match.params
    this._fecthGif({ id: gifId })
  }

  render () {
    const { data } = this.state.gif

    return (
      <div>
        <p>Pagina de detalle</p>
        <p>{data}</p>
        <img 
             src=""
             alt="" />
        <ButtonBackToHome />
      </div>
    )
  }
}
