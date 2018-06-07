import React from 'react'
import PropTypes from 'prop-types'
import Header from '../public/header';
import Slider from '../component/slider';

class Home extends React.Component {
  constructor(){
    super();
  }

  render () {
    return (<div>
      <Header/>
      <Slider/>
    </div>)
  }
}

export default Home;
