import React, { Component } from 'react';

export class Dropdown extends Component {
  render() {
    return (
      <li>
        <img src={this.props.src} alt='' />
        <p>Lorem ipsum dolor</p>
      </li>
    );
  }
}

export default Dropdown;
