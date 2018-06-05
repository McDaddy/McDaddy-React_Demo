import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import style from '../../css/header';

class Header extends React.Component {
  constructor(){
    super();
  }

  render () {
    return (
      <div styleName='header'>
        <span styleName='left'>
          <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
        </span>
        <btn styleName='btnDownload'>APP下载</btn>
      </div>
    );
  }
}

export default CSSModules(Header,style);
