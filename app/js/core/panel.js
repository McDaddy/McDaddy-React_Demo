import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/common.less'
/**
 * Panel
 */
export class Panel extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className={this.props.className} styleName='default-panel'>
        <h4>-{this.props.title}-</h4>
        {this.props.children}
      </section>
    );
  }
}

Panel.propTypes = {
  // prop: PropTypes.type.isRequired
}

export default CSSModules(Panel, styles);
