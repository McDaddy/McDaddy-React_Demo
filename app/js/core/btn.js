import React, { Component, PropTypes } from 'react';
import styles from '../../css/common';
import CSSModules from 'react-css-modules';

/**
 * Btn
 */
export class Btn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={this.props.className} styleName='default-btn'>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(Btn,styles);
