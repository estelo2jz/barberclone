import React, { Component } from 'react';
import { GiBackwardTime } from 'react-icons/gi';
import { MdAttachMoney } from 'react-icons/md';


export default class Service extends Component {
  render() {
    function Suffix(props) {
      return (
        <div>
           <h1 className="suffix-heading">{props.title}</h1>
           <div className="suffix-flex">
             <div><p>{props.name}</p></div>
             <div className="suffix-time">
               <GiBackwardTime />
               <div><p>{props.time}</p></div>
             </div>
             <div className="suffix-time">
               <MdAttachMoney />
               <div>{props.price}</div>
             </div>
           </div>
        </div>
      );
    }
    function Minutes(props) {
      return (
        <div>
          {props.timeOne}
          {props.timeTwo}
        </div>
      );
    }
    function Price(props) {
      return (
        <p>56</p>
      );
    }
    return (
      <div className="service-container">
        <div className="service-header">
          <h1>SERVICES</h1>
        </div>
        <div className="service-flex">
          <div>
            <Suffix 
              title="ADOLESCENT (2-17)" 
              name="Haircut" 
              time="45 mins" 
              price="$25" />
            <Suffix 
              name="Haircut and Eyebrows" 
              time="50 mins" 
              price="$30" />
          </div>
          <div>
            <Suffix 
              title="MEN'S SERVICES (18+)" 
              name="Line up and Beard Shape up" 
              time="35 mins" 
              price="$20" />
            <Suffix 
              name="Haircut" 
              time="55 mins" 
              price="$35" />
            <Suffix 
              name="Haircut and Beard" 
              time="75 mins" 
              price="$45" />
            <Suffix 
              name="Haircut, Beard and Eyebrows" 
              time="85 mins" 
              price="$50" />
          </div>
          <div>
              <Suffix 
              title="ROYAL TREATMENT" 
              name="Haircut, Royal Shave, Eyebrows, Gold Mask and Bigen Dye" 
              time="95 mins" 
              price="$60" />
          </div>
        </div>

        <div className="service-extra">
          <p>All haircuts come with a complimentary wash. </p>
          <p>All beard services come with a complimentary wash and hot towel.</p>
        </div>
      </div>
    )
  }
}
