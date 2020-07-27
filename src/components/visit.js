import React, { Component } from 'react'

export default class Visit extends Component {
  render() {
    return (
      <div className="visit-container">
        <div className="visit-header">
          <h1>COME VISIT US</h1>
        </div>
        <div className="visit-address">
          <h4>We're located at 1154 E Lake St, Hanover Park, IL 60133</h4>
        </div>
        <div className="visit-image">
          <img src="https://via.placeholder.com/950x450" />
        </div>
      </div>
    )
  }
}
