import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../../css/navBar.less';
import Btn from '../core/btn';

class NavBar extends React.Component {
  constructor(){
    super();
  }

  render () {
    return (
      <div styleName='navBar'>
        <ul styleName='navBar-ul'>
          <li><img src="//img12.360buyimg.com/jrpmobile/jfs/t17650/174/1729132233/4020/2b09fc25/5ad6aac4N620fbed1.png?width=60&amp;height=60" alt=""/><p>首页</p></li>
          <li><img src="//img12.360buyimg.com/jrpmobile/jfs/t7690/252/3621724688/1715/757a3ca1/59e9d81bN27304850.png?width=60&amp;height=60"  alt=""/><p>赚钱</p></li>
          <li><img src="//img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&amp;height=60" alt=""/><p>借钱</p></li>
          <li><img src="//img12.360buyimg.com/jrpmobile/jfs/t19729/201/1027312338/1395/95cecd48/5ab85d0eN01f81011.png?width=56&amp;height=56" alt=""/><p>省钱</p></li>
          <li><img src="//img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&amp;height=60" alt=""/><p>金融会员</p></li>
        </ul>
      </div>
    );
  }
}

export default CSSModules(NavBar,styles);
