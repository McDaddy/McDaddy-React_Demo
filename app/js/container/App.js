import React, {PropTypes} from 'react';
import Home from './home';
import Provider from 'redux';
import store from '../store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Provider store={store}>
      <Home/>
    </Provider>);
  }
}

App.propTypes = {
};
