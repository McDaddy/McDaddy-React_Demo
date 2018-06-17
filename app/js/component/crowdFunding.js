import React, {PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import Panel from '../core/panel';
import styles from '../../css/home.less';
import Swiper from 'react-id-swiper';

export class CrowdFunding extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const params = {
      slidesPerView: 3,
      spaceBetween: 24,
      // freeMode: true,
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // }
    };
    return (<section styleName='crowd-funding-section'>
      <Panel title='众筹新品'>
        <Swiper {...params}>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t19990/203/1131512962/38522/dd594744/5b15fdfcNbb5c9217.jpg?width=335&height=421" alt=""/></div>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t21175/291/715906694/33834/80191bbe/5b15ff42Nb7c4635a.jpg?width=335&height=421" alt=""/></div>
          <div><img src="//img12.360buyimg.com/jrpmobile/jfs/t21433/228/724755954/28560/5599d225/5b15fe12N8732d7a5.jpg?width=335&height=421" alt=""/></div>
        </Swiper>
      </Panel>
    </section>
    );
  }
}

CrowdFunding.propTypes = {
};

export default CSSModules(CrowdFunding, styles);
