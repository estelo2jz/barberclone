import React, { Component } from 'react';
import BlogOne from '../icons/blog9.jpg'
import BlogTwo from '../icons/blog10.jpg'

export default class Blog extends Component {
  render() {
    return (
      <div className="blog-container">
        <div className="blog-header">
          <h1>BLOG</h1>
        </div>
        <div className="blog-flex">
          <div className="blogs">
            <div class="container">
              <div className="blog-image">
                <img src={BlogOne} />

              </div>
              <div class="bottom-left"><a href="#">Write a Comment</a></div>
              <div class="top-left">
                    <p>Royal Clippers</p>
                    <p>June 13</p>
                  </div>
              <div class="bottom-right">Bottom Right</div>
              <div class="centered">Centered</div>
              
            </div>
          </div>
          <div className="blogs">
            <div class="container">
                <div className="blog-image">
                  <img src={BlogTwo} />

                </div>
                <div className="blogs-content">
                  <div class="bottom-left"><a href="#">Write a Comment</a></div>
                  <div class="top-left">
                    <p>Royal Clippers</p>
                    <p>June 13</p>
                  </div>
                  <div class="bottom-right">Bottom Right</div>
                  <div class="centered">Centered</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
