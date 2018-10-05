import React, {PropTypes} from 'react';
import Home from './home';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
        <Home/>
    </div>);
  }
}

App.propTypes = {
};
