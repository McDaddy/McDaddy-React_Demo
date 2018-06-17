import React, { PureComponent, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../css/home.less';

/**
 * IconList
 */
export class IconList extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ul styleName='icon-list'>
        <li><img src='//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132'/><span>优惠券</span><span>100-99券</span></li>
        <li><img src='//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132'/><span>领红包</span></li>
        <li><img src='//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132'/><span>抢钢镚</span></li>
        <li><img src='//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135'/><span>白条提额</span></li>
      </ul>
    );
  }
}

IconList.propTypes = {
  // prop: PropTypes.type.isRequired
}

export default CSSModules(IconList, styles);
