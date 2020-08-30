import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  recursiveCond = () => {
    if (this.props.opacity >= 0.2){
      return <ColorBox opacity = {this.props.opacity - 0.1}/>
    } else {
      return null
    }
    
  }

  render() {
    console.log(this.props.opacity, this.props.box)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.recursiveCond()}
      </div>
    )
  }

}

