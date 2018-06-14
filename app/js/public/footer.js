import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../../css/footer';

class Footer extends React.Component {
  constructor(){
    super();
  }

  render () {
    return (
      <div styleName='footer'>
        <section styleName='versions'>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&amp;height=108" alt=""/><p>客户端</p></div>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&amp;height=108" alt=""/><p>触屏版</p></div>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&amp;height=108" alt=""/><p>电脑版</p></div>
        </section>
        <ul styleName='doc'>
          <li>Copyright © 2004-2018 京东JD.com 版权所有</li>
          <li>投资有风险，购买需谨慎</li>
          <li>京东金融平台服务协议</li>
          <li>京东金融隐私政策</li>
        </ul>
      </div>
    );
  }
}

export default CSSModules(Footer,styles);
