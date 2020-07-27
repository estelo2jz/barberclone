import React, { Component } from 'react'

export default class Hours extends Component {
  render() {
    function Schedule(props) {
      return (
        <li className="time-grid">
          <h2>
            <a href="/hours" className="time-heading" > 
              <h1>{props.icon}</h1>
            </a>
          </h2>
          <p>{props.children}</p>
        </li>
      );
    }
    return (
      <div className="hours-container">
        <div className="hours-header">
          <div className="hours-single">
            <Schedule icon="MON" children="10AM - 8PM" /> 
          </div>
          <div className="hours-single">
            <Schedule icon="TUE" children="10AM - 8PM" />
          </div>
          <div className="hours-single">
            <Schedule icon="WED" children="10AM - 8PM" />
          </div>
          <div className="hours-single">
            <Schedule icon="THU" children="10AM - 8PM" />
          </div>
          <div className="hours-single">
            <Schedule icon="FRI" children="9AM - 7PM" />
          </div>
          <div className="hours-single">
            <Schedule icon="SAT" children="9AM - 6PM" />
          </div>
          <div className="hours-single">
            <Schedule icon="SUN" children="CLOSED" />
          </div>
        </div>
      </div>
    )
  }
}
