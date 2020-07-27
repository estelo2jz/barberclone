import React, { Component } from 'react';
import Red from '../icons/red.jpg'



export default class About extends Component {
  render() {
    return (
      <div className="container" >
        <div className="image-test">
          <img className="image-back" src={Red} alt="pole" />
          <div>
            <div class="centered">
              <div className="container-header">
                <h1>OUR STORY</h1>
              </div>
              <div className="container-bio">
                <p>
                  Royal Clippers Barbershop first opened up the doors for you in November of 2015. The goal is simple - to "Elevate Your Self-Worth". 
                  We want to provide more than just a haircut or shave, we want to rejuvenate and make you feel your absolute best. We offer a variety of services ; 
                  tapers, fades, traditional men's cuts, hot towel shaves, beard sculpting, braids and more. Through these services, we realize that we have a moment of valuable time with you. 
                  Royal Clippers Barbershop wants to assure you that you will be leaving happier than when you first walked in. Highly trained barbers with great customer service is what we are all about. 
                  Proudly looking forward to your next visit, book us online, connect with us and elevate your self-worth!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}