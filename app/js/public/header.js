import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../../css/header';
import Btn from '../core/btn';

class Header extends React.Component {
  constructor(){
    super();
  }

  download = () => {
    fetch('http://localhost:3000', {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: ''
    }).then(response => {
      // console.log(response.blob());
      return response.blob();
    }).then(data => {
      console.log(data);
      let a = document.createElement('a');
      let url = window.URL.createObjectURL(data);
      let filename = 'my-excel.xlsx';
      a.href = url;
      a.download = filename;
      a.click();
    })
  }

  render () {
    // let Btn = CSSModules(Btn, this.props.styles);
    return (
      <div styleName='header'>
        <span styleName='left'>
          <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
        </span>
        <Btn className={this.props.styles['btnDownload']}  onClick={this.download}>APP下载</Btn>
      </div>
    );
  }
}

export default CSSModules(Header,styles);
