import React, { Component } from 'react';
import '../assets/css/objetlist.css'

import cv1 from '../assets/img/cv_1.png'
import cv2 from '../assets/img/cv_2.png'
import cv3 from '../assets/img/cv_3.png'

let objetsList = [
  { name: 'CV_1', description: 'description 1', price: '4,99€', image: cv1 },
  { name: 'CV_2', description: 'description 2', price: '4,99€', image: cv2 },
  { name: 'CV_3', description: 'description 3', price: '4,99€', image: cv3 },
]

 class Show extends React.Component {
  state = {
    showMessage: false,
  };


  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage })
  }

   render() {
     
     return (
       <ul>
         {objetsList.map(({ name, description, price, image }) => (
           <div className="ListStyle">
             <li>{name}</li>
             <img className="pictureCss" src={image} />
             <ul className="objectListDesign">
               <button onclick={this.onButtonClickHandler}>
                 {this.state.showMessage && <p>{description}</p>}
               </button>
               <li>{price}</li>
             </ul>
           </div>
         ))}
       </ul>
     )
  }
}
export default Show;
