import React, { PureComponent, PropTypes } from 'react';
import Panel from '../core/panel';
import CSSModules from 'react-css-modules';
import styles from '../../css/home.less';

/**
 * Investment
 */
export class Investment extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Panel title='理财精选' className={this.props.styles['investment-panel']}>
        <ul className={this.props.styles['investment-content']}>
          {
            (() => {
              return this.props.data.map((item) => {
                return (<li className={this.props.styles['investment-item']} key={item.title}>
                  <span>{item.title}<p styleName={item.feature ? 'p-feature' : ''}>{item.feature}</p></span>
                  <span>{item.rate}%</span>
                  <span>{item.desc}</span>
                </li>)
              })
            })()
          }
        </ul>
      </Panel>
    );
  }
}

Investment.propTypes = {
  // prop: PropTypes.type.isRequired
}

export default CSSModules(Investment, styles);
