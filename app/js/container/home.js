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
import {connect} from 'react-redux';
import * as homeActions from '../actions/homeActions';
import {bindActionCreators} from 'redux';
import _ from 'lodash';

const investmentList = [{title: '京渤随享盈', rate: '15.50', desc: '历史年化收益率'},
{title: '年年盈', rate: '5.10', desc: '综合年化收益率', feature: '理财推荐'},
{title: '建信养老飞益鑫', rate: '4.72', desc: '近7日年化收益'},
{title: '小白基金', rate: '4.50', desc: '近7日年化收益', feature:'超短期'}];

class Home extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.homeActions.loadMenuActionCreator();
  //   fetch('http://localhost:3000',
  //     {
  //
  //     }
  // );
  }

  render () {
    if (this.props.homeData.investmentList.length > 0) {
      this.props.homeData.investmentList[0].title = 'sad'
    }

    return (<div styleName='home-page'>
      <Header/>
      <img styleName='ad-fixed-img' src='//img12.360buyimg.com/jrpmobile/jfs/t21436/340/923020148/11810/e9247761/5b1c9436N351971c7.gif'/>
      <Slider/>
      <IconList/>
      <div styleName='ad-div'>
        <img src='//img12.360buyimg.com/jrpmobile/jfs/t20011/230/1414390294/52563/c7493df2/5b1ddd68N5fefc2ff.jpg?width=750&height=260'/>
      </div>

      <Investment data={this.props.homeData.investmentList}/>
      <CrowdFunding/>
      <Footer/>
      <NavBar/>
    </div>)
  }
}

const mapDispatchToProps = dispatch => {
  return {homeActions: bindActionCreators(
    homeActions
  ,dispatch)};
}


const mapStateToProps = state => {
  // debugger
  // console.log(state.homeReducer.investmentList === investmentList);
  // console.log(_.isEqual(state.homeReducer.investmentList , investmentList));
  return (
    {
      homeData: state.homeReducer
    }
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Home, styles));
