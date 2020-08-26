import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return this.props.opacity >= 0.2 ? (

      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {console.log(this.props.opacity)}
         <ColorBox opacity={ this.props.opacity - 0.1  } /> 
     
      </div>
    )
    : null
  }

}

//opacity value _is greater than or equal to 0.2_: