import React from 'react'
import PropTypes from 'prop-types'
import Header from '../public/header';
import Slider from '../component/slider';
import IconList from '../component/iconList';
import Investment from '../component/investment';
import CrowdFunding from '../component/crowdFunding';
import Footer from '../public/footer';
import NavBar from '../public/navBar';
import CSSModules from 'react-css-modules';
import styles from '../../css/home.less';



class Home extends React.Component {
  constructor(){
    super();
  }

  render () {
    return (<div styleName='home-page'>
      <Header/>
      <img styleName='ad-fixed-img' src='//img12.360buyimg.com/jrpmobile/jfs/t21436/340/923020148/11810/e9247761/5b1c9436N351971c7.gif'/>
      <Slider/>
      <IconList/>
      <div styleName='ad-div'>
        <img src='//img12.360buyimg.com/jrpmobile/jfs/t20011/230/1414390294/52563/c7493df2/5b1ddd68N5fefc2ff.jpg?width=750&height=260'/>
      </div>

      <Investment data={investmentList}/>
      <CrowdFunding/>
      <Footer/>
      <NavBar/>
    </div>)
  }
}

export default CSSModules(Home, styles);
