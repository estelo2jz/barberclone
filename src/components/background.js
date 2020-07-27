import React, { Component } from 'react';
import Cover from '../icons/bglogo.webp'

export default class Background extends Component {
  render() {
    return (
      <div className="background-container" >
        <div className="imgae-test">
          <img src={Cover} />
        </div>
      </div>
    )
  }
}