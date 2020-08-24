import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
     
   
  render() {
     let o = this.props.opacity
    
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        
        {this.props.opacity >= 0.2 ? <ColorBox opacity={ o - .1} /> : null}
      </div>
    )
  }

}

