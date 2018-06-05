import React from 'react'
import PropTypes from 'prop-types'
import Header from '../public/header';

class Home extends React.Component {
  constructor(){
    super();
  }

  render () {
    return (<div>
      <Header/>
    </div>)
  }
}

export default Home;
