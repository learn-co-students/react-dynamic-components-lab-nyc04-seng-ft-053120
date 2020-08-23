import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    // If opacity is greater than or equal to 0.2, then render another colorbox inside itself (have a parent div with className color-box, set the style to by the opacity that is passed in, then have a child color box, passing in opacity that is reduced by 0.1)
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      return null
    }
  }

}